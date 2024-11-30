import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { spotifyService } from "../../services/spotifyService";

const SpotifyCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      exchangeCodeForToken(code);
    }
  }, []);

  async function exchangeCodeForToken(code: string) {
    try {
      await spotifyService.callback(code);
      const token = localStorage.getItem("spotifyAccessToken");
      if (!token) {  
        console.error("No token found in localStorage.");
        navigate("/login");
      } else {
        console.log("Token successfully retrieved:", token);
        navigate("/home");
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  return <div>Loading...</div>;
};

export default SpotifyCallback;
