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
exports.Service = void 0;
const query_1 = require("./query");
const messages_1 = require("../../common/messages");
const status_code_1 = require("../../common/status_code");
const utils_1 = require("../../common/utils");
const query = new query_1.Query();
class Service {
    constructor() {
        this.addGrocery = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield query.addGrocery(body);
                if (yield utils_1.utils.notNullUndefinedEmpty(result)) {
                    return {
                        statusCode: status_code_1.statusCodes.created,
                        message: messages_1.messages.groceryItemAdded,
                        result: result,
                    };
                }
                else if (result == null || result.length == 0) {
                    return {
                        statusCode: status_code_1.statusCodes.suceess,
                        message: messages_1.messages.noData,
                        result: result,
                    };
                }
                else {
                    return {
                        statusCode: status_code_1.statusCodes.internalServerError,
                        error: messages_1.messages.indexedDBnternalServerError,
                        result: null,
                    };
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.viewGroceries = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield query.viewGroceries();
                if (yield utils_1.utils.notNullUndefinedEmpty) {
                    return {
                        statusCode: status_code_1.statusCodes.suceess,
                        message: messages_1.messages.success,
                        result: result,
                    };
                }
                else if (!result) {
                    return {
                        statusCode: status_code_1.statusCodes.notFound,
                        message: messages_1.messages.groceryItemNotFound,
                        result: null,
                    };
                }
                else {
                    return {
                        statusCode: status_code_1.statusCodes.internalServerError,
                        error: messages_1.messages.indexedDBnternalServerError,
                    };
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.updateGrocery = (id, body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield query.updateGrocery(id, body);
                if (yield utils_1.utils.notNullUndefinedEmpty) {
                    return {
                        statusCode: status_code_1.statusCodes.suceess,
                        message: messages_1.messages.groceryItemUpdated,
                        result: result,
                    };
                }
                else if (!result) {
                    return {
                        statusCode: status_code_1.statusCodes.notFound,
                        message: messages_1.messages.groceryItemNotFound,
                        result: null,
                    };
                }
                {
                    return {
                        statusCode: status_code_1.statusCodes.internalServerError,
                        error: messages_1.messages.indexedDBnternalServerError,
                    };
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.removeGrocery = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield query.removeGrocery(id);
                if (yield utils_1.utils.notNullUndefinedEmpty) {
                    return {
                        statusCode: status_code_1.statusCodes.suceess,
                        message: messages_1.messages.dataDeleted,
                    };
                }
                else if (result == null) {
                    return {
                        statusCode: status_code_1.statusCodes.badRequest,
                        message: messages_1.messages.nothingToDelete,
                    };
                }
                {
                    return {
                        statusCode: status_code_1.statusCodes.internalServerError,
                        error: messages_1.messages.indexedDBnternalServerError,
                    };
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.manageInventory = (id, body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield query.manageInventory(id, body);
                if (result != undefined || null) {
                    return {
                        statusCode: status_code_1.statusCodes.suceess,
                        message: messages_1.messages.dataSaved,
                        result: { id: result.id },
                    };
                }
                else {
                    return {
                        statusCode: status_code_1.statusCodes.internalServerError,
                        error: messages_1.messages.indexedDBnternalServerError,
                    };
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.Service = Service;
