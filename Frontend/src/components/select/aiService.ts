import axios from "axios"
import { appConfig } from "../../Utils/AppConfig"

class AiService{

public async getEmotion(userContent:string){

const res = await axios.post<string>(appConfig.gatewayUrl+"/qna",{question:userContent})
return res.data
}

}

export const aiService = new AiService() 