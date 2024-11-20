"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./groceries_db.sqlite3",
        },
        useNullableDefault: true,
    },
};
