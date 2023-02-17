import React from "react";
import arrowLeft from "../../../assets/icons/arrow_left.svg";
import image1 from "../../../assets/images/image1.png";
import close from "../../../assets/icons/icon_close.svg";
import { cartWidgetAtom } from "../../store/cart";
import { useSetAtom } from "jotai";

export const ShoppingCart = () => {
  const setCartWidget = useSetAtom(cartWidgetAtom);

  return (
    <div className="fixed w-[384px] h-auto rounded drop-shadow top-16 md:right-0 bg-white border-white outline-none py-6 px-4">
      <div className="flex items-center gap-6 pl-2 mb-9">
        <button onClick={() => setCartWidget(false)} className="text-3xl">
          <img src={arrowLeft} alt="arrow" />
        </button>
        <p className="text-lg font-bold">Shopping cart</p>
      </div>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between text-center gap-x-4">
            <div className="flex items-center gap-5">
              <img src={image1} alt="image1" width={77} height={77} />
              <p className="text-boulder">Round shelf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold">$ 120,00</p>
              <button className="bg-white text-3xl">
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-center gap-x-4">
            <div className="flex items-center gap-5">
              <img src={image1} alt="image1" width={77} height={77} />
              <p className="text-boulder">Round shelf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold">$ 120,00</p>
              <button className="bg-white text-3xl">
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-center gap-x-4">
            <div className="flex items-center gap-5">
              <img src={image1} alt="image1" width={77} height={77} />
              <p className="text-boulder">Round shelf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold">$ 120,00</p>
              <button className="bg-white text-3xl">
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-center gap-x-4">
            <div className="flex items-center gap-5">
              <img src={image1} alt="image1" width={77} height={77} />
              <p className="text-boulder">Round shelf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold">$ 120,00</p>
              <button className="bg-white text-3xl">
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-between">
          <div className="flex items-center justify-between bg-alabaster w-full rounded-lg py-6 font-bold p-5">
            <p className="text-sm">Total</p>
            <p>$ 560.00</p>
          </div>

          <button className="bg-primary text-white w-full rounded-lg py-4 hover:bg-green-700 transition-colors font-bold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
