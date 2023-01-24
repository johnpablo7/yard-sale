import { Link } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { authAtom } from "../../store/auth";
import { NavUser } from "./NavUser";
import iconNotification from "../../../assets/icons/icon_shopping_cart_notification.svg";
import logoYard from "../../../assets/logos/logo_yard_sale.svg";
import iconMenu from "../../../assets/icons/icon_menu.svg";
import { ShoppingCart } from "../common/ShoppingCart";
import { cartWidgetAtom } from "../../store/cart";
import { NavbarMenu } from "../common/NavbarMenu";

export const Navbar = () => {
  const auth = useAtomValue(authAtom);
  const [cartWidget, setCartWidget] = useAtom(cartWidgetAtom);

  return (
    <>
      <header className="fixed right-0 top-0 w-full bg-app-white flex items-center justify-between p-4 z-40 rounded drop-shadow-md">
        <div className="md:hidden">
          <img src={iconMenu} alt="icon-menu" className="mx-auto w-8 h-8" />
        </div>

        <div className="flex items-center">
          <div className="md:px-12">
            <img
              src={logoYard}
              alt="logo_yard_sale"
              className="mx-auto"
              width={144}
              height={30}
            />
          </div>
          <div className="hidden md:block">
            <NavbarMenu />
          </div>
        </div>

        <div className="flex items-center md:px-12 gap-x-8">
          <div className="hidden md:flex">
            {auth ? (
              <NavUser />
            ) : (
              <Link to="/login" className="font-bold text-app-green text-sm">
                Sign in
              </Link>
            )}
          </div>

          <button onClick={() => setCartWidget(!cartWidget)}>
            <img
              src={iconNotification}
              alt="logo_yard_sale"
              className="w-8 h-8"
            />
          </button>
        </div>
      </header>

      {cartWidget && <ShoppingCart />}
    </>
  );
};
