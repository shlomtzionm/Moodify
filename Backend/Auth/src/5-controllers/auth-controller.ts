import express, { NextFunction, Request, Response } from "express";
import { authService } from "../4-services/auth-service";
import { StatusCode } from "../3-models/enums";

class AuthController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.post("/token", this.callback);
    this.router.post("/user", this.getUserData);
    this.router.get("/spotify", this.getSpotifyUrl);
  }

  private async callback(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const res = await authService.callback(request.body.code);
      response.status(200).json(res);
    } catch (err: any) {
      next(err);
    }
  }

  private async getUserData(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const userData = await authService.getUserData(request.body.token);
      response.status(StatusCode.OK).json(userData);
    } catch (error: any) {
      next(error);
    }
  }

  private async getSpotifyUrl(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const url = authService.authUrl();
      response.status(StatusCode.OK).json(url);
    } catch (error: any) {
      next(error);
    }
  }
}

const authController = new AuthController();
export const authRouter = authController.router;
