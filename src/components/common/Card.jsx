import { useAtom } from "jotai";
import { productWidgetAtom, productWidgetAtom2 } from "../../store/product";
import { ProductDetails } from "./ProductDetails";
import btAddCart from "../../../assets/icons/bt_add_to_cart.svg";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";

export const Card = () => {
  const [productWidget, setProductWidget] = useAtom(productWidgetAtom);

  return (
    <div>
      <button onClick={() => setProductWidget(!productWidget)}>
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
      {productWidget && <ProductDetails />}
    </div>
  );
};

export const CardTwo = () => {
  const [productWidget2, setProductWidget2] = useAtom(productWidgetAtom2);

  return (
    <div>
      <button onClick={() => setProductWidget2(!productWidget2)}>
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
      {productWidget2 && <ProductDetails />}
    </div>
  );
};
