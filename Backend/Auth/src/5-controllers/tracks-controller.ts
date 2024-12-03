import express, { NextFunction, Request, Response } from "express";
import { StatusCode } from "../3-models/enums";
import { trackServices } from "../4-services/tracks-service";

class TracksController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.post("/tracks", this.getTracks);
  }

  private async getTracks(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
const mood = request.body.mood
const token = request.headers.authorization?.split(' ')[1];
const res = await trackServices.getTracks(mood,token)
console.log(res);

response.status(StatusCode.OK).json(res) 
} catch (err: any) {
      next(err);
    }
  }

}

const tracksController = new TracksController();
export const tracksRouter = tracksController.router;
