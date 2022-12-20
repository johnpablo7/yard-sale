import React from "react";
import { Link } from "react-router-dom";

export const HomeMenu = () => {
  return (
    <div className="fixed w-[150px] h-auto rounded drop-shadow top-16 md:right-36 bg-app-white border-app-white border outline-none">
      <ul className="flex flex-col gap-y-6 text-end p-4 py-6">
        <li>
          <Link to="/" className="font-bold">
            My orders
          </Link>
        </li>
        <li>
          <Link to="/" className="font-bold">
            My account
          </Link>
        </li>
        <li className="border-t-2 outline-none pt-5">
          <Link to="/" className="text-sm text-app-green">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};
