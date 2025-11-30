import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 🔄 Apply theme to <html> on change
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const navItems = (
    <>
      {["Home", "Course", "Contact", "About"].map((page) => (
        <li key={page}>
          <NavLink
            to={`/${page === "Home" ? "" : page.toLowerCase()}`}
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 text-white px-3 py-2 rounded-md"
                : "hover:bg-blue-200 px-3 py-2 rounded-md"
            }
          >
            {page}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 bg-amber-200 dark:bg-slate-700 dark:text-white shadow-md transition-all duration-300">
      <div className="navbar justify-between">
        {/* Brand */}
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-bold">BookStore</a>
        </div>

        {/* Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4">{navItems}</ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center gap-4">
          {/* 🌗 Theme toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform"
          >
            {theme === "dark" ? (
              // 🌞 Light mode icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400"
              >
                <path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.07-3a1 1 0 0 1 0 2H19a1 1 0 1 1 0-2h.07zM12 17a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V18a1 1 0 0 1 1-1zm6.36-6.64a1 1 0 0 1 1.41 1.41L18.36 13a1 1 0 1 1-1.41-1.41l1.41-1.23zm-12.73 0L6.64 11.5A1 1 0 1 1 5.23 13L3.82 11.59a1 1 0 1 1 1.41-1.41z" />
              </svg>
            ) : (
              // 🌙 Dark mode icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-900"
              >
                <path d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 0 1 11.19 4.41a1 1 0 0 0-1.4-1.05A10 10 0 1 0 21.64 13z" />
              </svg>
            )}
          </button>

          {/* Login Button */}
          <a
            className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </a>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
