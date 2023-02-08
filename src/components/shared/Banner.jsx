import { NavLink } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="bg-[url('../../../assets/images/banner-yard.jpg')] bg-cover bg-center p-12 md:p-40">
      <div className="h-auto">
        <h1 className="text-base md:text-4xl text-gray-800 font-bold mb-4 capitalize">
          the best discounts <br /> for decorating <br /> your home
        </h1>
        <p className="hidden md:block">
          *Interest-free fees. Valid with BCP, BBVA and Diners credit cards
        </p>
        <button className="mt-12 hidden md:block">
          <NavLink
            to="/"
            className="bg-slate-500 border-app-green font-bold text-app-green px-8 py-3 rounded-md hover:bg-app-green hover:text-slate-700 transition"
          >
            Shop Now
          </NavLink>
        </button>
      </div>
    </div>
  );
};
