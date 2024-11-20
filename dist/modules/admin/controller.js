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
exports.Controller = void 0;
const service_1 = require("./service");
const service = new service_1.Service();
exports.Controller = {
    addGrocery: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service.addGrocery(req.body);
            res.status(result.statusCode).send(result);
        }
        catch (error) {
            next(error);
        }
    }),
    viewGroceries: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service.viewGroceries();
            res.status(result.statusCode).send(result);
        }
        catch (error) {
            next(error);
        }
    }),
    removeGrocery: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service.removeGrocery(parseInt(req.params.id));
            res.status(result.statusCode).send(result);
        }
        catch (error) {
            next(error);
        }
    }),
    updateGrocery: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service.updateGrocery(parseInt(req.params.id), req.body);
            res.status(result.statusCode).send(result);
        }
        catch (error) {
            next(error);
        }
    }),
    manageInventory: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service.manageInventory(parseInt(req.params.id), req.body);
            res.status(result.statusCode).send(result);
        }
        catch (error) {
            next(error);
        }
    }),
};
