import { knex } from "../db_conection/knex";

export async function dbMigration() {
  let is_user_exist = await knex.schema.hasTable("users");
  if (!is_user_exist) {
    await knex.schema.createTable("users", (table: any) => {
      table.increments("id").primary();
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.string("role").notNullable();
    });
  }

  let is_groceries_exist = await knex.schema.hasTable("groceries");
  if (!is_groceries_exist) {
    await knex.schema.createTable("groceries", (table: any) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.decimal("price", 10, 2).notNullable();
      table.integer("inventory").notNullable();
    });
  }

  let is_orders_exist = await knex.schema.hasTable("orders");
  if (!is_orders_exist) {
    await knex.schema.createTable("orders", (table: any) => {
      table.increments("id").primary();
      table.integer("groceryId").unsigned().notNullable();
      table.integer("quantity").unsigned().notNullable();
      table.float("totalPrice").unsigned();
      table
        .foreign("groceryId")
        .references("id")
        .inTable("groceries")
        .onDelete("CASCADE");

      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  }

  let is_order_items_exist = await knex.schema.hasTable("order_items");
  if (!is_order_items_exist) {
    await knex.schema.createTable("order_items", (table: any) => {
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
}
