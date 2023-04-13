import { Router } from "express";
import {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
  } from "../controllers/miatwo.controllers.js";

  const router = Router();

router.get("/miatwo", getTasks);

router.get("/miatwo/:id", getTask);

router.post("/miatwo", createTask);

router.put("/miatwo/:id", updateTask);

router.delete("/miatwo/:id", deleteTask);

export default router;