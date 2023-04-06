import React from "react";
import { NavLink } from "react-router-dom";

const Topmenu = () => {
  return (
    <div className="my-5 mx-auto w-96">
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <NavLink to={"/dashboard/allorder"} activeClassName="active">
              All Order
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/processing"} activeClassName="active">
              Processing
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/onhold"} activeClassName="active">
              On Hold
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/complete"} activeClassName="active">
              Complete
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topmenu;
