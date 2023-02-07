import { NavLink } from "react-router-dom";
// import bannerYard from "../../../assets/images/banner-yard.jpg";

export const Banner = () => {
  return (
    <div className="bg-[url('../../../assets/images/banner-yard.jpg')] h-[600px] w-[1920px] bg-cover bg-center p-24">
      <div className="py-8">
        <h1 className="text-base md:text-4xl text-gray-800 font-bold mb-4 capitalize">
          the best discounts <br /> for decorating <br /> your home
        </h1>
        <p className="hidden md:block">
          *Interest-free fees. Valid with BCP, BBVA and Diners credit cards
        </p>
        <div className="mt-12 hidden md:block">
          <NavLink
            to="/"
            className="bg-slate-500 border-app-green font-bold text-app-green px-8 py-3 rounded-md hover:bg-app-green hover:text-slate-700 transition"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};
