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
        this.addGrocery = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, inventory } = body;
                const result = yield (0, knex_1.knex)("groceries").insert({ name, price, inventory }, ["id"]);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.viewGroceries = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, knex_1.knex)("groceries").select("*");
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.updateGrocery = (id, body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price } = body;
                const result = yield (0, knex_1.knex)("groceries")
                    .where({ id })
                    .update({ name, price });
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.removeGrocery = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, knex_1.knex)("groceries").where({ id }).del();
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.manageInventory = (id, body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { inventory } = body;
                const updatedCount = yield (0, knex_1.knex)("groceries")
                    .where({ id })
                    .update({ inventory }, ["id"]);
                return updatedCount;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.Query = Query;
