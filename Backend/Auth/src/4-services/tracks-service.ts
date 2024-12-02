import axios from "axios";
import { appConfig } from "../2-utils/app-config";
import { Moods } from "../3-models/moodsEnum";
import { TracksResModel } from "../3-models/tracksResModel";

class TrackServices {
  public async getTracks(mood:Moods,token:string) {
 console.log(token);
 
    try {
        console.log(token);
        
      const res = await axios.get<TracksResModel>(appConfig.searchUrl, {
        headers: { Authorization: `Bearer ${token}` },
        params: { q: mood, type: 'playlist', limit: 25 }
    });
    return res.data
    } catch (error: any) {
        console.log(error);
        
      throw new Error;
    }
  }
}

export const trackServices = new TrackServices();
