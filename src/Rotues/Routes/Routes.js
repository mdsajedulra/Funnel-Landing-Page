import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Component/Dashboard/Dashboard";
import Home from "../../Component/Home";
import Main from "../../Component/Main/Main";
import Thankyou from "../../Component/Thankyou";
import Allorder from "../../Component/Dashboard/AllOrder";
import Processing from "../../Component/Dashboard/Processing";
import Onhold from "../../Component/Dashboard/Onhold";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/thankyou",
        element: <Thankyou></Thankyou>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "/dashboard", element: <Allorder></Allorder> },
      { path: "/dashboard/allorder", element: <Allorder></Allorder> },
      {
        path: "/dashboard/processing",
        element: <Processing></Processing>,
      },
      {
        path: "/dashboard/onhold",
        element: <Onhold></Onhold>,
      },
    ],
  },
]);
