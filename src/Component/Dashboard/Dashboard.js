import { Sidebar } from "flowbite-react";
import React from "react";
import Allorder from "./AllOrder";
import Menu from "./Sidebar/Menu";
import { Outlet } from "react-router-dom";
import Topmenu from "./Sidebar/Topmenu";

const Dashboard = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <div>
          <Topmenu></Topmenu>
        </div>

        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
