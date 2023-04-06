import { Sidebar } from "flowbite-react";
import React from "react";

const Menu = () => {
  return (
    <div>
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard">All Order</Sidebar.Item>
            <Sidebar.Item href="/dashboard/processing" labelColor="alternative">
              Processing
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/onhold" labelColor="alternative">
              On Hold
            </Sidebar.Item>
            <Sidebar.Item href="#" label="3">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#">Users</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sign In</Sidebar.Item>
            <Sidebar.Item href="#">Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Menu;
