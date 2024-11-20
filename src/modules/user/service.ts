import { Query } from "./query";
import { messages } from "../../common/messages";
import { statusCodes } from "../../common/status_code";
import { BookGroceriesRequest } from "./model/user.model";
import { utils } from "../../common/utils";
const query = new Query();
export class Service {
  listGroceries = async (): Promise<any> => {
    try {
      const result: any = await query.listGroceries();

      if (await utils.notNullUndefinedEmpty(result)) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.success,
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

  bookGroceries = async (body: BookGroceriesRequest): Promise<any> => {
    try {
      const result: any = await query.bookGroceries(body);
      if (await utils.notNullUndefinedEmpty) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.orderPlaced,
          result: result,
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
