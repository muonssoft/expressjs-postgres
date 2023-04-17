import { Router } from "express";
import {
    get,
    post,
    update,
    deleteId,
    getSerial,
  } from "../controllers/miaonet.controllers.js";

  const router = Router();

router.get("/miaonet", get);

//router.get("/miaone/:id", getTask);

router.get("/miaonet/:serial", getSerial);

router.post("/miaonet", post);

router.put("/miaonet/:id", update);

router.delete("/miaonet/:id", deleteId);

export default router;