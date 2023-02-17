import React from "react";
import image1 from "../../../../assets/images/image1.png";

export const Order = () => {
  return (
    <div className="w-[405px] h-auto">
      <p className="text-lg font-bold mb-12">My order</p>
      <div className="flex items-center justify-between bg-alabaster w-full rounded-lg py-6 font-bold p-5 mb-7">
        <div className="flex flex-col gap-1">
          <p className="font-bold">04.25.2021</p>
          <p className="text-boulder text-sm">6 articles</p>
        </div>
        <div>
          <p>$ 560.00</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-y-8">
          <div className="flex items-center justify-between text-center gap-x-4">
            <div className="flex items-center gap-5">
              <img src={image1} alt="image1" width={77} height={77} />
              <p className="text-boulder">Round shelf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold">$ 120,00</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-center gap-x-4">
            <div className="flex items-center gap-5">
              <img src={image1} alt="image1" width={77} height={77} />
              <p className="text-boulder">Round shelf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold">$ 120,00</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-center gap-x-4">
            <div className="flex items-center gap-5">
              <img src={image1} alt="image1" width={77} height={77} />
              <p className="text-boulder">Round shelf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold">$ 120,00</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-center gap-x-4">
            <div className="flex items-center gap-5">
              <img src={image1} alt="image1" width={77} height={77} />
              <p className="text-boulder">Round shelf</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold">$ 120,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
