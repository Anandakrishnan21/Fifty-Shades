import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../CSS/index.css";
import { Nav } from "react-bootstrap";
import { Menu, X } from "lucide-react";
import mask from "../images/mask.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full sticky top-0 z-[1] p-2 bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
        <div className="text-2xl font-semibold flex flex-row items-center gap-2">
            <img src= {mask} alt="mask" className="w-13 h-10" />
          <p>Fifty Shades</p>
        </div>
        <Nav className="hidden md:block">
          <ul className="list-none flex space-x-5 text-2xl">
            <li>
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/image">
                Image
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/video">
                Video
              </Nav.Link>
            </li>
          </ul>
        </Nav>
        <div className="flex md:hidden">
          <button onClick={toggleButton}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="p-2 md:hidden">
          <Nav className=" md:block">
            <ul className="list-none flex flex-col space-y-5 text-lg">
              <li>
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={NavLink} to="/image">
                  Image
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={NavLink} to="/video">
                  Video
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
