import { Router } from "express";
import {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
    getSerial,
  } from "../controllers/miatwo.controllers.js";

  const router = Router();

router.get("/miatwo", getTasks);

//router.get("/miatwo/:id", getTask);

router.get("/miatwo/:serial", getSerial);

router.post("/miatwo", createTask);

router.put("/miatwo/:id", updateTask);

router.delete("/miatwo/:id", deleteTask);

export default router;