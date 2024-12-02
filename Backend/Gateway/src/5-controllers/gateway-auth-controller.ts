import axios from "axios";
import express, { NextFunction, Request, Response } from "express";
import { appConfig } from "../2-utils/app-config";
import { StatusCode } from "../3-models/enums";
import { log } from "console";

class UserController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.post("/token", this.callback);
    this.router.post("/user", this.getUserDate);
    this.router.post("/qna", this.getAnswer);
    this.router.post("/tracks", this.getTracks);
  }

  private async callback(request: Request, response: Response, next: NextFunction): Promise<void> {
    const code:{code:string} = request.body.code
    try {
     const msRes = await axios.post(`${appConfig.authUrl}/token`,{code})
     response.status(StatusCode.OK).json(msRes.data)
          } catch (err: any) {
      next(err);
    }
  }
  private async getUserDate(request: Request, response: Response, next: NextFunction): Promise<void> {
    const token:string = request.body.token
    try {
     const msRes = await axios.post(`${appConfig.authUrl}/user`,{token})
     response.status(StatusCode.OK).json(msRes.data)
          } catch (err: any) {
      next(err);
    }
  }

  private async getAnswer(request: Request, response: Response, next: NextFunction): Promise<void> {  
    try {
      const question:string = request.body.question
      const msRes = await axios.post(`${appConfig.openAiUrl}/qna`,{question})
     response.status(StatusCode.OK).json(msRes.data)
          } catch (err: any) {
      next(err);
    }
  }

  private async getTracks(request: Request, response: Response, next: NextFunction): Promise<void> {  
    try {
      const mood:string = request.body.mood
      const token = request.headers.authorization?.split(' ')[1];
      const msRes = await axios.post(`${appConfig.authUrl}/tracks`,{mood},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
     response.status(StatusCode.OK).json(msRes.data)
  } catch (err: any) {
      next(err);
    }
  }


}

const userController = new UserController();
export const userRouter = userController.router;
