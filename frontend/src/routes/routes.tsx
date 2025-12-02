
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landingpage/LandingPage";
import CreateCv from "../components/CreateCv";

const routes  = createBrowserRouter([
    {
        path: "/",
        element:<LandingPage />
    },
    {
        path: "/createcv",
        element:<CreateCv />
    },
])

export default routes