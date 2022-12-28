import { Link } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { authAtom } from "../../store/auth";
import { NavUser } from "./NavUser";
import iconNotification from "../../../assets/icons/icon_shopping_cart_notification.svg";
import logoYard from "../../../assets/logos/logo_yard_sale.svg";
import { ShoppingCart } from "../common/ShoppingCart";
import { cartWidgetAtom } from "../../store/cart";

export const Navbar = () => {
  const auth = useAtomValue(authAtom);
  const [cartWidget, setCartWidget] = useAtom(cartWidgetAtom);

  return (
    <header className="fixed right-0 top-0 w-full bg-app-white flex items-center justify-between p-4 z-40 rounded drop-shadow-md">
      <div className="flex items-center">
        <div className="px-12">
          <img
            src={logoYard}
            alt="logo_yard_sale"
            className="mx-auto"
            width={144}
            height={30}
          />
        </div>

        <nav>
          <ul className="flex flex-row items-center gap-x-5">
            <button className="rounded-xl py-1 px-4 bg-app-white text-app-green font-bold border-app-green border">
              All
            </button>
            <li>
              <Link to="/" className="text-app-silver">
                Clothes
              </Link>
            </li>
            <li>
              <Link to="/" className=" text-app-silver">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/" className="text-app-silver">
                Furniture
              </Link>
            </li>
            <li>
              <Link to="/" className="text-app-silver">
                Toys
              </Link>
            </li>
            <li>
              <Link to="/" className="text-app-silver">
                Others
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center px-14 gap-x-8">
        {auth ? (
          <NavUser />
        ) : (
          <Link to="/login" className="font-bold text-app-green text-sm">
            Sign in
          </Link>
        )}

        <button onClick={() => setCartWidget(!cartWidget)}>
          <img
            src={iconNotification}
            alt="logo_yard_sale"
            className="icon-notification"
          />
        </button>

        {cartWidget && <ShoppingCart />}
      </div>
    </header>
  );
};
