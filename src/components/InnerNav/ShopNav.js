import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ShopNav() {
  return (
    <>
      <header className="w-full p-2 bg-white text-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
          <div className="text-2xl font-semibold flex flex-row items-center gap-2">
            <p>Shop</p>
          </div>
          <Nav className="flex space-x-3 md:space-x-5 text-base md:text-2xl ">
            <Nav.Link as={NavLink} to="/novel">
              Novel
            </Nav.Link>
            <Nav.Link as={NavLink} to="/accessories">
              Accessories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/playroom">
              Play
            </Nav.Link>
          </Nav>
        </div>
      </header>
    </>
  );
}

export default ShopNav;
