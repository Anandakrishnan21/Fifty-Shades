import React from "react";
import {Outlet } from "react-router-dom";
import ShopNav from "../InnerNav/ShopNav";

function Shopping() {
  return (
    <>
      <ShopNav />
      <Outlet />
    </>
  );
}

export default Shopping;
