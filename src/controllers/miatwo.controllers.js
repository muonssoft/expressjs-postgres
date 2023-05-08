import { pool } from "../db.js";

export const get = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM miatwo ORDER BY id DESC LIMIT 200 "
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSerial = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM miatwo WHERE serial = ? ORDER BY id DESC LIMIT 200",
      [req.params.serial]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getId = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM miatwo WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const post = async (req, res) => {
  try {
    const { serial, date, T, H, Z, atemp, hum, P } = req.body;
    const [result] = await pool.query(
      "INSERT INTO miatwo(serial,date,T,H,Z,atemp, hum, P) VALUES (?,?,?,?,?,?,?,?)",
      [serial, date, T, H, Z, atemp, hum, P]
    );
    res.json({
      id: result.insertId,
      serial,
      date,
      T,
      H,
      Z,
      atemp,
      hum,
      P,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const result = await pool.query("UPDATE miatwo SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteId = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM miatwo WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
