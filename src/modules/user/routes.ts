import express from "express";
import { Controller } from "./controller";
import { validateToken } from "../../middleware/validateToken";
const router = express.Router();

router.get("/groceries", Controller.listGroceries);
router.post("/orders", Controller.bookGroceries);

module.exports = router;
