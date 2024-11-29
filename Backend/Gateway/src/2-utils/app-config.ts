import dotenv from "dotenv";

// Load ".env" file into process.env object:
dotenv.config();

class AppConfig {
    public readonly isDevelopment = process.env.ENVIRONMENT === "development";
    public readonly isProduction = process.env.ENVIRONMENT === "production";
    public readonly port = process.env.PORT;
    public readonly clientId = process.env.CLIENT_ID;
    public readonly authUrl = process.env.AUTH_URL;
    public readonly tokenUrl = process.env.TOKEN_URL;
    public readonly clientSecret = process.env.CLIENT_SECRET;
    public readonly redirectUri = process.env.REDIRECT_URI;
    public readonly openAiUrl = process.env.OPEN_AI_URL;
}

export const appConfig = new AppConfig();
