import express, { NextFunction, Request, Response } from "express";
import { userService } from "../4-services/auth-service";
import { StatusCode } from "../3-models/enums";

class UserController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.post("/token", this.callback);
    this.router.post("/user", this.getUserData);
  }

  private async callback(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const res = await userService.callback(request.body.code);
      response.status(200).json(res);
    } catch (err: any) {
      next(err);
    }
  }

  private async getUserData(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const userData = await userService.getUserData(request.body.token);
      response.status(StatusCode.OK).json(userData);
    } catch (error: any) {
      next(error);
    }
  }
}

const userController = new UserController();
export const userRouter = userController.router;
