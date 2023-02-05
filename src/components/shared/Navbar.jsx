import { Link, NavLink } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { authAtom } from "../../store/auth";
import { NavUser } from "./NavUser";
import { ShoppingCart } from "../common/ShoppingCart";
import { cartWidgetAtom } from "../../store/cart";
import { NavbarMenu } from "../common/NavbarMenu";
import iconNotification from "../../../assets/icons/icon_shopping_cart_notification.svg";
import logoYard from "../../../assets/logos/logo_yard_sale.svg";
import iconMenu from "../../../assets/icons/icon_menu.svg";

export const Navbar = () => {
  const auth = useAtomValue(authAtom);
  const [cartWidget, setCartWidget] = useAtom(cartWidgetAtom);

  return (
    <>
      <header className="fixed right-0 top-0 w-full bg-slate-500 flex items-center justify-between py-4 md:px-5 px-4 z-40 drop-shadow-md">
        <div className="md:hidden">
          <img src={iconMenu} alt="icon-menu" className="mx-auto w-8 h-8" />
        </div>

        <div className="flex items-center">
          <div className="md:px-12">
            <NavLink to="/">
              <img
                src={logoYard}
                alt="logo_yard_sale"
                className="mx-auto"
                width={144}
                height={30}
              />
            </NavLink>
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
              <Link to="/login" className="font-bold text-app-green text-xl">
                Sign in
              </Link>
            )}
          </div>

          <button onClick={() => setCartWidget(!cartWidget)}>
            <img
              src={iconNotification}
              alt="logo_yard_sale"
              className="md:w-8 md:h-8 w-10 h-10"
            />
          </button>
        </div>
      </header>

      {cartWidget && <ShoppingCart />}
    </>
  );
};
