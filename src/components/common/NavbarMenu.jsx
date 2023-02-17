import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { views } from "../../data/views";

export const NavbarMenu = () => {
  return (
    <nav className="hidden md:hidden lg:flex xl:flex">
      <ul className="flex items-center justify-center md:gap-4 text-xl font-bold text-primary flex-wrap md:flex-nowrap">
        {views.map((list) => (
          <li key={list.id}>
            <NavLink
              to={list.path}
              className={({ isActive }) =>
                clsx(
                  "px-2 border",
                  isActive
                    ? "transition duration-500 rounded-xl text-primary border-primary"
                    : "dark:text-white border-transparent"
                )
              }
            >
              {list.link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
