import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { views } from "../../data/views";

export const NavbarMenu = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center md:gap-6 text-xl font-bold text-app-green">
        {views.map((list) => (
          <li key={list.id}>
            <NavLink
              to={list.path}
              className={({ isActive }) =>
                clsx(
                  "px-2 border",
                  isActive
                    ? "transition duration-500 rounded-xl text-app-green border-app-green"
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
