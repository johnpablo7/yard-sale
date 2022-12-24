import { useState } from "react";
import btAddCart from "../../../public/assets/icons/bt_add_to_cart.svg";
import image1 from "../../../public/assets/images/image1.png";
import image2 from "../../../public/assets/images/image2.png";
import { ProductDetails } from "./ProductDetails";

export const Card = () => {
  const [show, showDetail] = useState(false);

  const handleShow = () => {
    showDetail(!show);
  };

  return (
    <div>
      <div>
        <button onClick={handleShow}>
          <img
            src={image1}
            alt="image1"
            className="rounded mt-10 mb-3 mx-auto"
            width={350}
            height={350}
          />
        </button>
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
      {show && <ProductDetails />}
    </div>
  );
};

export const CardTwo = () => {
  const [show, showDetail] = useState(false);

  const handleShow = () => {
    showDetail(!show);
  };

  return (
    <div>
      <div>
        <button onClick={handleShow}>
          <img
            src={image2}
            alt="image2"
            className="rounded mt-10 mb-3 mx-auto"
            width={350}
            height={350}
          />
        </button>
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
      {show && <ProductDetails />}
    </div>
  );
};
