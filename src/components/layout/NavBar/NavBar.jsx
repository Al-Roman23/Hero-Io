import React from "react";
import { Link, NavLink } from "react-router";
import { BiHome } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa6";
import { MdInstallDesktop } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import Logo from "../../Logo/Logo";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-gray-500 font-semibold flex items-center gap-1"
        >
          <BiHome size={18} />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/apps"
          className="text-gray-500 font-semibold flex items-center gap-1"
        >
          <FaAppStore size={20} />
          Apps
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/installations"
          className="text-gray-500 font-semibold flex items-center gap-1"
        >
          <MdInstallDesktop size={20} />
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow py-1">
      <div className="navbar md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow gap-3"
            >
              {navItems}
            </ul>
          </div>

          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navItems}</ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/Al-Roman23/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary bg-gradient-to-r from-violet-500 to-blue-500 flex items-center gap-1"
          >
            <BsGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
