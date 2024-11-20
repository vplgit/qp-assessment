import { Query } from "./query";
import { messages } from "../../common/messages";
import { statusCodes } from "../../common/status_code";
import { Groceries } from "./model/admin.model";
import { utils } from "../../common/utils";
const query = new Query();
export class Service {
  addGrocery = async (body: Groceries): Promise<any> => {
    try {
      const result = await query.addGrocery(body);

      if (await utils.notNullUndefinedEmpty(result)) {
        return {
          statusCode: statusCodes.created,
          message: messages.groceryItemAdded,
          result: result,
        };
      } else if (result == null || result.length == 0) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.noData,
          result: result,
        };
      } else {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
          result: null,
        };
      }
    } catch (error: any) {
      throw error;
    }
  };

  viewGroceries = async (): Promise<any> => {
    try {
      const result: any = await query.viewGroceries();
      if (await utils.notNullUndefinedEmpty) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.success,
          result: result,
        };
      } else if (!result) {
        return {
          statusCode: statusCodes.notFound,
          message: messages.groceryItemNotFound,
          result: null,
        };
      } else {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
        };
      }
    } catch (error: any) {
      throw error;
    }
  };

  updateGrocery = async (id: number, body: Groceries): Promise<any> => {
    try {
      const result: any = await query.updateGrocery(id, body);
      if (await utils.notNullUndefinedEmpty) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.groceryItemUpdated,
          result: result,
        };
      } else if (!result) {
        return {
          statusCode: statusCodes.notFound,
          message: messages.groceryItemNotFound,
          result: null,
        };
      }
      {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
        };
      }
    } catch (error: any) {
      throw error;
    }
  };

  removeGrocery = async (id: number): Promise<any> => {
    try {
      const result: any = await query.removeGrocery(id);
      if (await utils.notNullUndefinedEmpty) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.dataDeleted,
        };
      } else if (result == null) {
        return {
          statusCode: statusCodes.badRequest,
          message: messages.nothingToDelete,
        };
      }
      {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
        };
      }
    } catch (error: any) {
      throw error;
    }
  };

  manageInventory = async (id: number, body: Groceries): Promise<any> => {
    try {
      const result: any = await query.manageInventory(id, body);
      if (result != undefined || null) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.dataSaved,
          result: { id: result.id },
        };
      } else {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
        };
      }
    } catch (error: any) {
      throw error;
    }
  };
}
