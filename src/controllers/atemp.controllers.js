import { pool } from "../db.js";

export const get = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM atemp ORDER BY id DESC LIMIT 200 "
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getId = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM atemp WHERE id_project = ?",
      [req.params.id_project]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const post = async (req, res) => {
  try {
    const data = req.body;
    data.map(
      async (item) =>
        await pool.query(
          "INSERT INTO atemp(id, name, value,  id_project,id_profile) VALUES (?,?,?,?,?)",
          [
            item.id,
            item.name,
            item.value,
            item.id_project,
            item.id_profile
          ]
        )
    );
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const update = async (req, res) => {
  try {
    const result = await pool.query("UPDATE atemp SET ? WHERE id = ?", [
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
    const [result] = await pool.query("DELETE FROM atemp WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
