import dotenv from "dotenv";

// Load ".env" file into process.env object:
dotenv.config();

class AppConfig {
    public readonly isDevelopment = process.env.ENVIRONMENT === "development";
    public readonly isProduction = process.env.ENVIRONMENT === "production";
    public readonly port = process.env.PORT;
    public readonly apiKey = process.env.API_KEY;
    public readonly gptUrl = process.env.GPT_URL;

}

export const appConfig = new AppConfig();
