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
exports.dbMigration = dbMigration;
const knex_1 = require("../db_conection/knex");
function dbMigration() {
    return __awaiter(this, void 0, void 0, function* () {
        let is_user_exist = yield knex_1.knex.schema.hasTable("users");
        if (!is_user_exist) {
            yield knex_1.knex.schema.createTable("users", (table) => {
                table.increments("id").primary();
                table.string("username").notNullable();
                table.string("password").notNullable();
                table.string("role").notNullable();
            });
        }
        let is_groceries_exist = yield knex_1.knex.schema.hasTable("groceries");
        if (!is_groceries_exist) {
            yield knex_1.knex.schema.createTable("groceries", (table) => {
                table.increments("id").primary();
                table.string("name").notNullable();
                table.decimal("price", 10, 2).notNullable();
                table.integer("inventory").notNullable();
            });
        }
        let is_orders_exist = yield knex_1.knex.schema.hasTable("orders");
        if (!is_orders_exist) {
            yield knex_1.knex.schema.createTable("orders", (table) => {
                table.increments("id").primary();
                table.integer("groceryId").unsigned().notNullable();
                table.integer("quantity").unsigned().notNullable();
                table.float("totalPrice").unsigned();
                table
                    .foreign("groceryId")
                    .references("id")
                    .inTable("groceries")
                    .onDelete("CASCADE");
                table.timestamp("created_at").defaultTo(knex_1.knex.fn.now());
            });
        }
        let is_order_items_exist = yield knex_1.knex.schema.hasTable("order_items");
        if (!is_order_items_exist) {
            yield knex_1.knex.schema.createTable("order_items", (table) => {
                table.increments("id").primary();
                table
                    .integer("order_id")
                    .unsigned()
                    .notNullable()
                    .references("id")
                    .inTable("orders");
                table
                    .integer("grocery_id")
                    .unsigned()
                    .notNullable()
                    .references("id")
                    .inTable("groceries");
                table.integer("quantity").notNullable();
            });
        }
    });
}
