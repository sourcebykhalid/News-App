import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import NewsLogo from "../newsLogo.png";
const NavBar = () => {
  return (
    <div>
      <nav className="fixed top-0 flex flex-col sm:flex-row justify-center items-center sm:justify-between mx-auto bg-black text-lime-400 font-bold w-full z-50 px-8 py-4">
        <div className="flex flex-col font-bold animate-pulse">
          <img src={NewsLogo} className=" w-12" alt="" />
          News CaFé
        </div>
        <ul className="flex flex-wrap justify-center items-center sm:gap-x-3 gap-x-1 text-gray-400">
          <li className="hover:text-gray-200">
            <Link className="" to="/">
              Home
            </Link>
          </li>
          <li className="hover:text-gray-200">
            <Link className="" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="hover:text-gray-200">
            <Link className="" to="/business">
              Business
            </Link>
          </li>
          <li className="hover:text-gray-200">
            <Link className="" to="/science">
              Science
            </Link>
          </li>
          <li className="hover:text-gray-200">
            <Link className="" to="/sports">
              Sports
            </Link>
          </li>
          <li className="hover:text-gray-200">
            <Link className="" to="/technology">
              Technology
            </Link>
          </li>
          <li className="hover:text-gray-200">
            <Link className="" to="/health">
              Health
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
