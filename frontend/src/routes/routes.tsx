
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landingpage/LandingPage";

const routes  = createBrowserRouter([
    {
        path: "/",
        element:<LandingPage />
    }
])

export default routes