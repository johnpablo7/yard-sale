import { NavLink } from "react-router-dom";
import bannerYard from "../../../assets/images/banner-yard.jpg";

export const Banner = () => {
  return (
    <div className="relative inline-block overflow-hidden">
      <img src={bannerYard} alt="banner" className="bg-cover bg-center" />
      <div className="absolute inline-block items-center justify-center top-4 left-6 md:left-6 md:top-2 xl:left-12 xl:top-6 overflow-hidden p-3 lg:p-10 md:p-3 xl:p-20">
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-800 font-bold mb-4 capitalize">
          the best discounts <br /> for decorating <br /> your home
        </h1>
        <p className="hidden md:block">
          *Interest-free fees. Valid with BCP, BBVA and Diners credit cards
        </p>
        <button className="xl:mt-12 md:mt-6 hidden md:block">
          <NavLink
            to="/"
            className="bg-slate-500 border-app-green font-bold text-app-green md:px-4 md:py-2 xl:px-8 xl:py-3 lg:px-4 lg:py-2 rounded-md hover:bg-app-green hover:text-slate-700 transition"
          >
            Shop Now
          </NavLink>
        </button>
      </div>
    </div>
  );
};
