import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../../public/assets/icons/arrow_left.svg";
import image1 from "../../../public/assets/images/image1.png";
import close from "../../../public/assets/icons/icon_close.svg";

export const ShoppingCart = () => {
  return (
    <div className="fixed w-[384px] h-auto rounded drop-shadow top-16 md:right-0 bg-app-white border-app-white outline-none py-6 px-4">
      <div className="flex items-center gap-6 pl-2">
        <button className="text-3xl">
          <img src={arrowLeft} alt="arrow" />
        </button>
        <p className="text-lg font-bold">Shopping cart</p>
      </div>

      <div className="flex items-center text-center mt-9 mb-20">
        <img
          src={image1}
          alt="image1"
          className="mb-6 mr-4"
          width={77}
          height={77}
        />
        <p className="text-sm text-app-boulder">Round shelf</p>
        <p>$ 120,00</p>
        <button className="bg-app-white text-3xl rounded-full p-3 left-4 top-6">
          <img src={close} alt="close" />
        </button>
      </div>

      <div className="flex flex-col">
        <div>
          <p>Total</p>
          <p>$ 560.00</p>
        </div>
        <Link to="/">
          <div className="flex items-center">
            <button className="bg-app-green text-white w-full rounded-lg py-4 hover:bg-green-700 transition-colors font-bold">
              Checkout
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
