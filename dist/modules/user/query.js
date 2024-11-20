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
exports.Query = void 0;
const knex_1 = require("../../database/db_conection/knex");
class Query {
    constructor() {
        this.listGroceries = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, knex_1.knex)("groceries")
                    .select("*")
                    .where("inventory", ">", 0);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.bookGroceries = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { items } = body;
                for (const item of items) {
                    yield (0, knex_1.knex)("groceries")
                        .where({ id: item.groceryId })
                        .decrement("inventory", item.quantity);
                    yield (0, knex_1.knex)("orders").insert({
                        groceryId: item.groceryId,
                        quantity: item.quantity,
                    });
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.Query = Query;
