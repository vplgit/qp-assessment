"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const messages_1 = require("../common/messages");
const status_code_1 = require("../common/status_code");
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    // if (!token) {
    //   return res.status(401).json({ message: "Access token required" });
    // }
    try {
        //const decoded = await utils.jwtVerify(token);
        req.user = req.user !== undefined ? req.user : req.headers["user_role"];
        next();
    }
    catch (err) {
        res
            .status(status_code_1.statusCodes.unauthorized)
            .json({ message: messages_1.messages.invalidToken });
    }
});
exports.validateToken = validateToken;
