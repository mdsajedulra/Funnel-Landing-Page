import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvder/AuthProvider";

const Topmenu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then((result) => console.log(result));
  };
  return (
    <div className="my-5 px-10 flex justify-between mx-auto text-center rounded-md shadow-md bg-green-300 w-full">
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
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
      <div className="dropdown dropdown-end">
        <div tabIndex={0} className=" m-1 rounded-full cursor-pointer">
          <img
            alt=""
            className="w-10 rounded-full"
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
          />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
        >
          <span className="m-2">{user?.email} </span>
          <li>
            <button onClick={handleLogout} className="   hover:bg-slate-400">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topmenu;
