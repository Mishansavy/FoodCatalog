import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container lg:px-0 px-5 py-2 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between h-20 items-center font-bold">
      <NavLink to="/" end>
        <p className="text-xl lg:text-2xl">😋Yummy Food's</p>
      </NavLink>
      <div className=" lg:block">
        <ul className="flex gap-x-20">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foods"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
