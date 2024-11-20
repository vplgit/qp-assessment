import { Service } from "./service";
import { Request, Response, NextFunction } from "express";
const service = new Service();
export const Controller = {
  addGrocery: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.addGrocery(req.body);
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  viewGroceries: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.viewGroceries();
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  removeGrocery: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.removeGrocery(parseInt(req.params.id));
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  updateGrocery: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.updateGrocery(
        parseInt(req.params.id),
        req.body
      );
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  manageInventory: async (
    req: any,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.manageInventory(
        parseInt(req.params.id),
        req.body
      );
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },
};
