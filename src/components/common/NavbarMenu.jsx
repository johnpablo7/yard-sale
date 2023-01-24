import React from "react";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <nav>
      <ul className="flex flex-row items-center gap-x-5">
        <button className="rounded-xl py-1 px-4 bg-app-white text-app-green font-bold border-app-green border">
          All
        </button>
        <li>
          <Link to="/" className="text-app-silver">
            Clothes
          </Link>
        </li>
        <li>
          <Link to="/" className=" text-app-silver">
            Electronics
          </Link>
        </li>
        <li>
          <Link to="/" className="text-app-silver">
            Furniture
          </Link>
        </li>
        <li>
          <Link to="/" className="text-app-silver">
            Toys
          </Link>
        </li>
        <li>
          <Link to="/" className="text-app-silver">
            Others
          </Link>
        </li>
      </ul>
    </nav>
  );
};
