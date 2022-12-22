import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import iconNotification from "../../../public/assets/icons/icon_shopping_cart_notification.svg";
import logoYard from "../../../public/assets/logos/logo_yard_sale.svg";

export const DestokNavbar = () => {
  return (
    <header className="fixed right-0 top-0 w-full bg-app-white flex items-center justify-between p-4 z-40 rounded drop-shadow-md">
      <div className="flex items-center">
        <div className="px-12">
          <img
            src={logoYard}
            alt="logo_yard_sale"
            className="mx-auto"
            width={144}
            height={30}
          />
        </div>

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
      </div>

      <div className="flex items-center px-14 gap-x-8 text-app-green text-sm">
        <button className="font-bold">Sign in</button>
        <div className="flex items-center text-app-boulder">
          <p className="text-sm text-app-boulder">camilayokoo@gmail.com</p>
          <RiArrowDropDownLine className="text-2xl translate-y-0.5" />
        </div>
        <img src={iconNotification} alt="logo_yard_sale" className="" />
      </div>
    </header>
  );
};
