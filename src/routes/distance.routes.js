import { Router } from "express";
import {
  get,
    post,
    update,
    deleteId,
    getId,
  } from "../controllers/distance.controllers.js";

  const router = Router();

router.get("/distance", get);

router.get("/distance/:id_project", getId);

router.post("/distance", post);

router.put("/distance/:id", update);

router.delete("/distance/:id", deleteId);

export default router;