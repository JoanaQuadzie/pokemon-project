import React from "react";
import { Outlet } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function RootLayout() {
  return (
    <section>
      <div>
        <nav>
          <ul className="flex items-center justify-center bg-slate-600 font-semibold text-xl text-white space-x-5 p-5">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
            <div className="flex items-center justify-center relative">
              <input
                className="p-2 m-2 rounded-lg text-sm w-[400px]"
                type="text"
                placeholder="search for pokemons"
              />
              <BiSearch className="absolute right-4 top-[17px] text-gray-500" />
            </div>
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
      {/* <footer>footer</footer> */}
    </section>
  );
}
