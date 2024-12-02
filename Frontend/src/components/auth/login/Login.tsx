import React from "react";
import { spotifyService } from "../../../services/spotifyService";
import "./login.css"
import { LoginButton } from "../../loginButton/LoginButton";

export const SpotifyLogin: React.FC = () => {

function handleLogin(){
spotifyService.goToSpotifyAuth()
}

  return (<div id="Login">
    <h2>Login with Spotify</h2>
  <LoginButton handleLogin={handleLogin}/> 
  </div>);
};


