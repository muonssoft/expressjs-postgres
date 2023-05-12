import { Router } from "express";
import {
    get,
    post,
    update,
    deleteId,
    getSerial,
    
  } from "../controllers/miaone.controllers.js";

  const router = Router();

router.get("/miaone", get);



//router.get("/miaone/:id", getTask);

router.get("/miaone/:serial", getSerial);

router.post("/miaone", post);

router.put("/miaone/:id", update);

router.delete("/miaone/:id", deleteId);

export default router;