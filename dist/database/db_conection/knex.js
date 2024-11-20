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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = void 0;
let Knex = require("knex");
const migration_1 = require("../db_migration/migration");
const knex_conf_1 = __importDefault(require("../db_conection/knex_conf"));
exports.knex = Knex(knex_conf_1.default.development);
exports.knex.raw("SELECT 1").then(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield (0, migration_1.dbMigration)();
        console.log("SQLite DB connected!");
    }
    catch (error) {
        console.log("SQLite DB not connected!");
        console.log("DB Connection Error: ", (_a = error.message) !== null && _a !== void 0 ? _a : error);
    }
}));
