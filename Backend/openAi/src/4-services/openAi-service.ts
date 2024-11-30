import { appConfig } from "../2-utils/app-config";
import axios from "axios";
import { GptResponseModel } from "../Models/GptResponseModel";

class OpenAiService {
  public async getEmotion(userContent: string) {
    console.log(userContent);

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Getting one word emotion" },
        {
          role: "assistant",
          content:
            "Yor are an export in analyzing text into a one word emotion that describe the music that he will want to hear. the user will tell you a stroy or provide a couple of lines about how he feels. the word you return must be one of this words: Happy, Sad ,Chill, Relaxing ,Calm, Excited ,Energized, Romantic, Angry, Hopeful, Nostalgic, Melancholy, Joyful, Playful, Adventurous, Seren, Upbeat, Moody",
        },
        { role: "user", content: userContent },
      ],
    };

    const options = {
      headers: {
        authorization: `Bearer ${appConfig.apiKey}`,
      },
    };

    const axiosRes = await axios.post<GptResponseModel>(appConfig.gptUrl, requestBody, options);

    const gptRes = axiosRes.data;

    const completion = gptRes.choices[0].message.content;

    return completion;
  }
}

export const openAiService = new OpenAiService();
