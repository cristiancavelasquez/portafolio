import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="h-20 w-full bg-slate-600 flex items-center sticky top-0">
        <div className="bg-blue-500 h-10 w-full flex justify-between px-4">
          <Link className="bg-red-500" to="/">
            <img
              className="h-[40px] w-[120px]"
              src="https://w7.pngwing.com/pngs/71/786/png-transparent-logo-small-business-design-web-design-text-trademark.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center">
            <button type="button" className="bg-red-500 h-10 w-10 rounded-full">
              <i>DM</i>
            </button>
            <button type="button" className="bg-red-500 h-10 w-10 ml-3 rounded-full">nav</button>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Layout;
