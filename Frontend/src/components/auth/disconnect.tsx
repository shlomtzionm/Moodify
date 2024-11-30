import { FC, useEffect } from "react";
import { spotifyService } from "../../services/spotifyService";
import { useNavigate } from "react-router-dom";

export const Disconnect: FC = () => {
  const navigate = useNavigate();

//  async function isTokenValid(){
//     const valid = await spotifyService.isTokenValid();
//     if (valid) {
//       console.log("Token is valid.");
//     } else {
//       navigate("/login")
//     }
//   }

//   useEffect(() => {
//     isTokenValid()
//   }, []);
  return <a href="https://www.spotify.com/il-he/account/apps/">disconnect from spotify</a>;
};
