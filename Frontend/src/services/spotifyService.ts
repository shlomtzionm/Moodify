import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { TokenResModel } from "../models/tokenResModel";
import { UserModel } from "../models/userModel";

class SpotifyService {
  public goToSpotifyAuth() {
    window.location.href = appConfig.spotifyUrl;
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
}

export const spotifyService = new SpotifyService();