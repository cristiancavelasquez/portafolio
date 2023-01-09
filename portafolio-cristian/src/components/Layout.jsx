import { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaMoon,
  FaRegUser,
  FaRegFileAlt,
  FaBriefcase,
  FaAddressBook,
  FaSun
} from "react-icons/fa";
import logo from "../img/logo.svg"
import logonegro from "../img/logonegro.svg"

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const darkBackground = "bg-[#121212]";
  const clearBackground = "bg-[#FBFCFF]";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.remove(clearBackground);
      document.body.classList.add(darkBackground);
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove(darkBackground);
      document.body.classList.add(clearBackground);
    }
  });

  return (
    <>
      <div className="z-10 h-16 w-full bg-[#0466c8] dark:bg-[#121212] flex items-center lg:static sticky top-0">
        <div className=" h-10 w-full flex justify-between px-4">
          <Link to="/">
            <img
              className="h-[40px] w-[120px]"
              src= {darkMode?logonegro:logo}
              alt="logo"
            />
          </Link>
          <div className="ml-80 hidden lg:inline">
            <ul className="flex items-center">
              <NavLink
                className={
                  "flex hover:text-black duration-300 transition dark:hover:text-[#0466c8]  hover:font-bold px-2 py-2 text-white font-semibold justify-start items-center mx-10"
                }
                to="/"
              >
                About
              </NavLink>
              <NavLink
                className={
                  "flex hover:text-black duration-300 transition  dark:hover:text-[#0466c8] hover:font-bold px-2 py-2 text-white font-semibold justify-start items-center mx-10"
                }
                to="/resume"
              >
                Resume
              </NavLink>
              <NavLink
                className={
                  "flex hover:text-black duration-300 transition  dark:hover:text-[#0466c8] hover:font-bold px-2 py-2 text-white font-semibold justify-start items-center mx-10"
                }
                to="/works"
              >
                Works
              </NavLink>
              <NavLink
                className={
                  "flex hover:text-black duration-300 transition  dark:hover:text-[#0466c8] hover:font-bold px-2 py-2 text-white font-semibold justify-start items-center mx-10"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              type="button"
              className="bg-white dark:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-white hover:bg-black duration-300 transition  h-10 w-10 rounded-full flex justify-center items-center hover:text-white"
            >
              <i className="text-lg ">
                {darkMode?<FaSun />:<FaMoon />}
              </i>
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="hover:text-white lg:hidden hover:bg-orange-500 bg-white h-10 w-10 rounded-full ml-4 flex justify-center items-center"
            >
              <i className="text-lg">
                <FaBars />
              </i>
            </button>
          </div>
        </div>
        <nav className={`${isOpen ? "block" : "hidden"} "lg:hidden"`}>
          <ul className=" block rounded-b-[20px] shadow-md absolute left-0 top-16 z-[2222222] w-full dark:bg-[#1A1A1A] bg-white">
            <li>
              <NavLink
                onClick={toggleMenu}
                className={
                  "flex dark:text-white hover:text-orange-500 my-5 ml-3 justify-start items-center text-xs"
                }
                to="/"
              >
                <span className="mr-2 text-lg">
                  <i>
                    <FaRegUser />
                  </i>
                </span>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                className={
                  "flex dark:text-white hover:text-orange-500 my-5 ml-3 justify-start items-center text-xs"
                }
                to="/resume"
              >
                <span className="mr-2 text-lg">
                  <i>
                    <FaRegFileAlt />
                  </i>
                </span>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                className={
                  "flex dark:text-white hover:text-orange-500 my-5 ml-3 justify-start items-center text-xs"
                }
                to="/works"
              >
                <span className="mr-2 text-lg">
                  <i>
                    <FaBriefcase />
                  </i>
                </span>
                Works
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                className={
                  "flex dark:text-white hover:text-orange-500 my-5 ml-3 justify-start items-center text-xs"
                }
                to="/contact"
              >
                <span className="mr-2 text-lg">
                  <i>
                    <FaAddressBook />
                  </i>
                </span>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Layout;
