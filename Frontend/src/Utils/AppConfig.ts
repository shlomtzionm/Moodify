class AppConfig {

    // Backend urls:
    public clientId = "6da11554ec304fca9186405f637f4c6c"
    public clientSecret = "1045a8d3e2a6451eab1aaac337f7b340"
    public redirectUri = "http://localhost:3002/callback"
    public scope = "user-read-private user-read-email"

    public spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}&scope=${this.scope}`
    public gatewayUrl = `http://localhost:3000/api`
    
    
    //Axios options:
    public readonly axiosOptions = (token:string)=>({
        headers: { // Tell axios to also send the image:
            "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
        }
    });
}

export const appConfig = new AppConfig();
