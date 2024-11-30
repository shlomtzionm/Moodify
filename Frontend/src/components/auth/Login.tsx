import React from "react";
import { spotifyService } from "../../services/spotifyService";
export const SpotifyLogin: React.FC = () => {

function handleLogin(){
spotifyService.goToSpotifyAuth()
}

  return (<div>
    <h1>Login with Spotify</h1>
    <button onClick={handleLogin}>Login </button>
  </div>);
};


