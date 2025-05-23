import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 bg-gradient-to-r from-orange-50 via-pink-50 to-white">
      <nav className="bg-white/80 backdrop-blur border-b border-orange-100 px-4 lg:px-10 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-12 w-12 rounded-full shadow-lg border-2 border-orange-200"
              alt="Logo"
            />
            <span className="ml-2 text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
              ReactRouter
            </span>
          </Link>
          {/* Auth Buttons */}
          <div className="flex items-center gap-2 lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 font-medium rounded-lg text-sm px-4 py-2 transition shadow-sm"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 focus:ring-4 focus:ring-orange-200 font-medium rounded-lg text-sm px-4 py-2 shadow transition"
            >
              Get started
            </Link>
          </div>
          {/* Navigation Links */}
          <div
            className="hidden lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-transparent 
                    ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}
                    hover:bg-orange-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-transparent 
                    ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}
                    hover:bg-orange-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-transparent 
                    ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}
                    hover:bg-orange-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
                                          <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-transparent 
                    ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}
                    hover:bg-orange-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
