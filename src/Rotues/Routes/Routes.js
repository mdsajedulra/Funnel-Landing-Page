import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Component/Dashboard/Dashboard";
import Home from "../../Component/Home";
import Main from "../../Component/Main/Main";
import Thankyou from "../../Component/Thankyou";
import Allorder from "../../Component/Dashboard/AllOrder";
import Processing from "../../Component/Dashboard/Processing";
import Onhold from "../../Component/Dashboard/Onhold";
import Complete from "../../Component/Dashboard/Complete";
import Login from "../../Component/Login/Login";
import PrivateRouter from "../PrivateRoutes/PrivateRotues";
import DashboardMain from "../../Component/Dashboard/DashboardMain";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      { path: "/dashboard", element: <DashboardMain></DashboardMain> },
      { path: "/dashboard/allorder", element: <Allorder></Allorder> },
      {
        path: "/dashboard/processing",
        element: <Processing></Processing>,
      },
      {
        path: "/dashboard/onhold",
        element: <Onhold></Onhold>,
      },
      {
        path: "/dashboard/complete",
        element: <Complete></Complete>,
      },
    ],
  },
]);
