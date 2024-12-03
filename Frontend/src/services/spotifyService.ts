import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { TokenResModel } from "../models/tokenResModel";
import { UserModel } from "../models/userModel";
import { Moods } from "../models/moodsEnum";
import { TracksResModel } from "../models/tracksResModel";

class SpotifyService {
  public async goToSpotifyAuth() {
    const url = await axios.get<string>(appConfig.gatewayUrl+"/spotify") ;
    window.location.href = url.data
  }

  public async callback(code: string) {
    try {
      const res = await axios.post<TokenResModel>(`${appConfig.gatewayUrl}/token`, { code });
      localStorage.setItem("spotifyAccessToken", res.data.access_token);
    } catch (error: any) {
      console.log(error);
    }
  }
  public async getUserData(): Promise<UserModel> {
    const token = localStorage.getItem("spotifyAccessToken");
    if (token) {
      const res = await axios.post<UserModel>(
        `${appConfig.gatewayUrl}/user`,
        { token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    }
    throw new Error("No token found");
  }

  public async getTracks(mood: Moods): Promise<TracksResModel> {
    try {
      const token = localStorage.getItem("spotifyAccessToken");
      const res = await axios.post<TracksResModel>(
        appConfig.gatewayUrl + "/tracks",
        { mood },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      return res.data;
    } catch (error: any) {
      throw new Error();
    }
  }

  public getRandom(max:number) {
  const  min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export const spotifyService = new SpotifyService();
