class AppConfig {

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
