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
    const [result] = await pool.query(
      "SELECT * FROM distance WHERE id_project = ?",
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
          "INSERT INTO distance(id, name, value, meter, calibrate, id_project,max, min, delta) VALUES (?, ?,?, ?, ?,?,?,?,?)",
          [
            item.id,
            item.name,
            item.value,
            item.meter,
            item.calibrate,
            item.max,
            item.min,
            item.delta,
            item.id_project,
          ]
        )
    );
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postt = async (req, res) => {
  try {
    const data = req.body; // Array of objects in JSON format
    //await pool.query('START TRANSACTION');
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const [result] = await pool.execute(
        "INSERT INTO distance (id, name, value, meter, calibrate, id_project) VALUES (?, ?, ?, ?, ?, ?)",
        [
          item.id,
          item.name,
          item.value,
          item.meter,
          item.calibrate,
          item.id_project,
        ]
      );
      item.id = result.insertId;
    }
    //await pool.query('COMMIT');
    await pool.end();
    res.json(data);
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
