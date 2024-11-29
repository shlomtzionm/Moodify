import { appConfig } from "../2-utils/app-config";
import axios from "axios";
import { IUserModel } from "../3-models/user-model";
const qs = require("qs");

class UserService {
  public async callback(code: string) {
    try {
      const data = qs.stringify({
        code: code,
        redirect_uri: appConfig.redirectUri,
        grant_type: "authorization_code",
        client_secret: appConfig.clientSecret,
        client_id: appConfig.clientId,
      });
      const headers = { "Content-Type": "application/x-www-form-urlencoded" };
      const tokenRes = await axios.post(appConfig.tokenUrl, data, { headers });

      return tokenRes.data;
    } catch (error) {
      throw new Error("Failed to exchange token");
    }
  }

  public async getUserData(token:string){
    try {
      const res = await axios.get<IUserModel>(appConfig.profileDataUrl,{
        headers:{
          Authorization:`Bearer ${token}`,
           'Content-Type': 'application/json'
        }
      })
      console.log(res.data);
      
      return res.data
    } catch (error:any) {
      console.log("error");
          }
  }
  
}

export const userService = new UserService();
