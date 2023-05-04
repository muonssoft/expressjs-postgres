import { Router } from "express";
import {
  get,
    post,
    update,
    deleteId,
    getId,
  } from "../controllers/atemp.controllers.js";

  const router = Router();

router.get("/atemp", get);

router.get("/atemp/:id_project", getId);

router.post("/atemp", post);

router.put("/atemp/:id", update);

router.delete("/atemp/:id", deleteId);

export default router;