import { Link } from "react-router-dom";
import { useSetAtom } from "jotai";
import { productWidgetAtom } from "../../store/product";
import close from "../../../assets/icons/icon_close.svg";
import more from "../../../assets/icons/more.svg";
import shape from "../../../assets/icons/shape.svg";
import fridge from "../../../assets/images/fridge.png";

export const ProductDetails = () => {
  const setProductWidget = useSetAtom(productWidgetAtom);

  return (
    <div className="fixed w-[384px] h-auto rounded top-16 md:right-0 bg-app-white border-app-white outline-none">
      <div className="relative">
        <button
          onClick={() => setProductWidget(false)}
          className="absolute bg-app-white text-3xl rounded-full p-3 left-4 top-6"
        >
          <img src={close} alt="close" />
        </button>
        <img src={fridge} alt="fridge" />
      </div>
      <div className="my-3 flex items-center justify-center">
        <img src={more} alt="more" />
      </div>
      <div className="flex flex-col px-9 py-5">
        <p className="text-lg font-bold mb-1">$ 120,00</p>
        <p className="text-lg text-app-boulder mb-5">Retro refrigerator</p>
        <p className="text-app-boulder mb-9">
          With its functional and practical interior, this refrigerator also
          fulfills a decorative function, adding personality and a retro-vintage
          aesthetic to your kitchen or workplace.
        </p>
        <Link to="/">
          <div className="flex items-center relative">
            <img src={shape} alt="add" className="absolute left-20" />
            <button className="bg-app-green text-white w-full rounded-lg py-4 hover:bg-green-700 transition-colors font-bold">
              Add to cart
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
