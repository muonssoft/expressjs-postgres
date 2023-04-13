import { Router } from "express";
import {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
  } from "../controllers/distance.controllers.js";

  const router = Router();

router.get("/distance", getTasks);

router.get("/distance/:id", getTask);

router.post("/distance", createTask);

router.put("/distance/:id", updateTask);

router.delete("/distance/:id", deleteTask);

export default router;