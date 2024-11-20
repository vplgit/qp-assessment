import { BookGroceriesRequest } from "./model/user.model";
import { knex } from "../../database/db_conection/knex";
export class Query {
  listGroceries = async () => {
    try {
      const result = await knex("groceries")
        .select("*")
        .where("inventory", ">", 0);
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  bookGroceries = async (body: BookGroceriesRequest) => {
    try {
      const { items } = body;

      for (const item of items) {
        await knex("groceries")
          .where({ id: item.groceryId })
          .decrement("inventory", item.quantity);
        await knex("orders").insert({
          groceryId: item.groceryId,
          quantity: item.quantity,
        });
      }
    } catch (error: any) {
      throw error;
    }
  };
}
