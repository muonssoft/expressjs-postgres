import { pool } from "../db.js";

export const get = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM miaonet ORDER BY id DESC LIMIT 200 "
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSerial = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM miaonet WHERE serial = ? ORDER BY id DESC LIMIT 1", [
      req.params.serial,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getId = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM miaonet WHERE id = ?", [
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
    const {serial, date, A0, A1, A2,phi0,phi1,phi2,AC0,AC1,AC2,phiC0,phiC1,phiC2} = req.body;
    const [result]= await pool.query(
      "INSERT INTO miaonet(serial, date, A0, A1, A2,phi0,phi1,phi2,AC0,AC1,AC2,phiC0,phiC1,phiC2	) VALUES (?, ?,?, ?, ?,?,?,?,?,?,?,?,?,?)",
      [serial, date, A0, A1, A2,phi0,phi1,phi2,AC0,AC1,AC2,phiC0,phiC1,phiC2]
    );
    res.json(console.log(`Registered ${ result.insertId}`));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const update = async (req, res) => {
  try {
    const result = await pool.query("UPDATE miaonet SET ? WHERE id = ?", [
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
    const [result] = await pool.query("DELETE FROM miaonet WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
