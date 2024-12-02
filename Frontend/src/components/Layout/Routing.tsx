import { Routes, Route, Navigate } from "react-router-dom";
import { SpotifyLogin } from "../auth/login/Login";
import SpotifyCallback from "../auth/auth";
import { HomePage } from "../pages/Home";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/login" element={<SpotifyLogin />} />
        <Route path="/callback" element={<SpotifyCallback />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/login" />} />
  </Routes>
    </div>
  );
}

export default Routing;
