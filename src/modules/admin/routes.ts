import express from "express";
import { Controller } from "./controller";
import { requireRole } from "../../middleware/role_check";
import { validateToken } from "../../middleware/validateToken";
const router = express.Router();

router.post(
  "/groceries",
  validateToken,
  requireRole("admin"),
  Controller.addGrocery
);
router.get(
  "/groceries",
  validateToken,
  requireRole("admin"),
  Controller.viewGroceries
);
router.delete(
  "/groceries/:id",
  validateToken,
  requireRole("admin"),
  Controller.removeGrocery
);
router.put(
  "/groceries/:id",
  validateToken,
  requireRole("admin"),
  Controller.updateGrocery
);
router.patch(
  "/groceries/:id/inventory",
  validateToken,
  requireRole("admin"),
  Controller.manageInventory
);

module.exports = router;
