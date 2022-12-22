import React from "react";
import { Link } from "react-router-dom";
import btAddCart from "../../../public/assets/icons/bt_add_to_cart.svg";
import image1 from "../../../public/assets/images/image1.png";
import image2 from "../../../public/assets/images/image2.png";

export const Card = () => {
  return (
    <Link>
      <div>
        <div>
          <img
            src={image1}
            alt="image1"
            className="rounded mt-10 mb-3 mx-auto"
            width={350}
            height={350}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">$ 35,00</p>
            <p className="text-app-boulder text-sm">Round shelf</p>
          </div>
          <div>
            <img src={btAddCart} alt="btn" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export const CardTwo = () => {
  return (
    <Link>
      <div>
        <div>
          <img
            src={image2}
            alt="image1"
            className="rounded mt-10 mb-3 mx-auto"
            width={350}
            height={350}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">$ 120,00</p>
            <p className="text-app-boulder text-sm">Retro refrigerator</p>
          </div>
          <div>
            <img src={btAddCart} alt="btn" />
          </div>
        </div>
      </div>
    </Link>
  );
};
