import React from "react";
import flechita from "../../../../public/assets/icons/flechita.svg";

export const HomeMyOrders = () => {
  return (
    <div className="w-[405px] h-auto">
      <p className="text-lg font-bold mb-12">My order</p>

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center justify-between w-full font-bold">
          <div className="flex flex-col gap-1">
            <p className="font-bold">04.25.2021</p>
            <p className="text-app-boulder text-sm font-normal">6 articles</p>
          </div>
          <div className="flex items-center gap-5">
            <p>$ 120,00</p>
            <button className="text-3xl">
              <img src={flechita} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full font-bold">
          <div className="flex flex-col gap-1">
            <p className="font-bold">04.25.2021</p>
            <p className="text-app-boulder text-sm font-normal">6 articles</p>
          </div>
          <div className="flex items-center gap-5">
            <p>$ 120,00</p>
            <button className="text-3xl">
              <img src={flechita} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full font-bold">
          <div className="flex flex-col gap-1">
            <p className="font-bold">04.25.2021</p>
            <p className="text-app-boulder text-sm font-normal">6 articles</p>
          </div>
          <div className="flex items-center gap-5">
            <p>$ 120,00</p>
            <button className="text-3xl">
              <img src={flechita} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full font-bold">
          <div className="flex flex-col gap-1">
            <p className="font-bold">04.25.2021</p>
            <p className="text-app-boulder text-sm font-normal">6 articles</p>
          </div>
          <div className="flex items-center gap-5">
            <p>$ 120,00</p>
            <button className="text-3xl">
              <img src={flechita} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full font-bold">
          <div className="flex flex-col gap-1">
            <p className="font-bold">04.25.2021</p>
            <p className="text-app-boulder text-sm font-normal">6 articles</p>
          </div>
          <div className="flex items-center gap-5">
            <p>$ 120,00</p>
            <button className="text-3xl">
              <img src={flechita} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
