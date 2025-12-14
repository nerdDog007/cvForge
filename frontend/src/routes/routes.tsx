
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landingpage/LandingPage";
import CreateCv from "../components/CreateCv";
import CV from "../components/Cv2";

const routes  = createBrowserRouter([
    {
        path: "/",
        element:<LandingPage />,

    },
    {
        path:"/createcv",
        element :<CreateCv/>,
    },
    {
        path:"/createcv/cv",
        element:<CV/>
    }
])
export default routes