let Knex = require("knex");

import { dbMigration } from "../db_migration/migration";
import config from "../db_conection/knex_conf";
export let knex = Knex(config.development);

knex.raw("SELECT 1").then(async () => {
  try {
    await dbMigration();
    console.log("SQLite DB connected!");
  } catch (error: any) {
    console.log("SQLite DB not connected!");
    console.log("DB Connection Error: ", error.message ?? error);
  }
});
