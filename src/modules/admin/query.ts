import { Groceries } from "./model/admin.model";
import { knex } from "../../database/db_conection/knex";
export class Query {
  addGrocery = async (body: Groceries) => {
    try {
      const { name, price, inventory } = body;
      const result = await knex("groceries").insert(
        { name, price, inventory },
        ["id"]
      );
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  viewGroceries = async () => {
    try {
      const result = await knex("groceries").select("*");
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  updateGrocery = async (id: number, body: Groceries) => {
    try {
      const { name, price } = body;
      const result = await knex("groceries")
        .where({ id })
        .update({ name, price });
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  removeGrocery = async (id: number) => {
    try {
      const result = await knex("groceries").where({ id }).del();
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  manageInventory = async (id: number, body: Groceries) => {
    try {
      const { inventory } = body;
      const updatedCount = await knex("groceries")
        .where({ id })
        .update({ inventory }, ["id"]);
      return updatedCount;
    } catch (error: any) {
      throw error;
    }
  };
}
