import express, { NextFunction, Request, Response } from "express";
import { StatusCode } from "../3-models/enums";
import { openAiService } from "../4-services/openAi-service";

class OpenAiController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.post("/qna", this.getAnswer);
  }

  private async getAnswer(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const question = request.body.question
const res = await openAiService.getEmotion(question)
response.status(StatusCode.OK).json(res)
} catch (err: any) {
      next(err);
    }
  }

}

const openAiController = new OpenAiController();
export const openAiRouter = openAiController.router;
