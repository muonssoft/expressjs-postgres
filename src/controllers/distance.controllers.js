import { pool } from "../db.js";

export const get = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM distance ORDER BY id DESC LIMIT 200 "
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getId = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM distance WHERE id_project = ?", [
      req.params.id_project,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const post = async (req, res) => {
  try {
    const { id, name, value, meter, id_project } = req.body;
    const [result] = await pool.query(
      "INSERT INTO distance(id, name, value, meter, id_project) VALUES (?, ?,?, ?, ?)",
      [id, name, value, meter, id_project]
    );
    res.json({
      id: result.insertId,
      name, 
      value, 
      meter, 
      id_project
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const result = await pool.query("UPDATE distance SET ? WHERE id = ?", [
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
    const [result] = await pool.query("DELETE FROM distance WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
