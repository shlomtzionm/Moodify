import { Routes, Route, Navigate } from "react-router-dom";
import { SpotifyLogin } from "../auth/Login";
import SpotifyCallback from "../auth/auth";
import { HomePage } from "../pages/home";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        
        <Route path="/login" element={<SpotifyLogin />} />
<Route path="/callback" element={<SpotifyCallback/>}/>
<Route path="/home" element={<HomePage/>}/>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Page not found route */}
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </div>
  );
}

export default Routing;
