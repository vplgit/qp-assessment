"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const role_check_1 = require("../../middleware/role_check");
const validateToken_1 = require("../../middleware/validateToken");
const router = express_1.default.Router();
router.post("/groceries", validateToken_1.validateToken, (0, role_check_1.requireRole)("admin"), controller_1.Controller.addGrocery);
router.get("/groceries", validateToken_1.validateToken, (0, role_check_1.requireRole)("admin"), controller_1.Controller.viewGroceries);
router.delete("/groceries/:id", validateToken_1.validateToken, (0, role_check_1.requireRole)("admin"), controller_1.Controller.removeGrocery);
router.put("/groceries/:id", validateToken_1.validateToken, (0, role_check_1.requireRole)("admin"), controller_1.Controller.updateGrocery);
router.patch("/groceries/:id/inventory", validateToken_1.validateToken, (0, role_check_1.requireRole)("admin"), controller_1.Controller.manageInventory);
module.exports = router;
