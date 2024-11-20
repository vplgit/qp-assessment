import { Service } from "./service";
import { Request, Response, NextFunction } from "express";
const service = new Service();
export const Controller = {
  listGroceries: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.listGroceries();
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  bookGroceries: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.bookGroceries(req.body);
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },
};
