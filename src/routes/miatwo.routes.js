import { Router } from "express";
import {
    get,
    post,
    update,
    deleteId,
    getSerial,
  } from "../controllers/miatwo.controllers.js";

  const router = Router();

router.get("/miatwo", get);

//router.get("/miatwo/:id", getTask);

router.get("/miatwo/:serial", getSerial);

router.post("/miatwo", post);

router.put("/miatwo/:id", update);

router.delete("/miatwo/:id", deleteId);

export default router;