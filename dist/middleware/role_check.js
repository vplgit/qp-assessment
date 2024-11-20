"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = void 0;
const messages_1 = require("../common/messages");
const status_code_1 = require("../common/status_code");
const requireRole = (role) => {
    return (req, res, next) => {
        const userRole = req.user;
        if (userRole !== role) {
            return res
                .status(status_code_1.statusCodes.forbidden)
                .json({ message: messages_1.messages.accessDenied });
        }
        next();
    };
};
exports.requireRole = requireRole;
