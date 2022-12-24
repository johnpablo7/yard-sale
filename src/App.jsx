import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { HomeMyOrder } from "./components/pages/home/HomeMyOrder";
import { HomeMyOrders } from "./components/pages/home/HomeMyOrders";
import { HomeProduct } from "./components/pages/home/HomeProduct";
import { HomeShopping } from "./components/pages/home/HomeShopping";
import { HomeSignin } from "./components/pages/home/HomeSignin";
// Layouts
import { AuthLayout } from "./layouts/AuthLayout";

// Pages
import { Error404 } from "./pages/404";
import { CreateAccount } from "./pages/auth/CreateAccount";
import { Login } from "./pages/auth/Login";
import { MyAccount } from "./pages/auth/MyAccount";
import { MyAccountEdit } from "./pages/auth/MyAccountEdit";
import { NewPassword } from "./pages/auth/NewPassword";
import { PasswordRecoveryOne } from "./pages/auth/PasswordRecoveryOne";
import { PasswordRecoveryTwo } from "./pages/auth/PasswordRecoveryTwo";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Home />} />
          <Route path="product" element={<HomeProduct />} />
          <Route path="shopping" element={<HomeShopping />} />
          <Route path="my-order" element={<HomeMyOrder />} />
          <Route path="my-orders" element={<HomeMyOrders />} />

          <Route path="signin" element={<HomeSignin />} />
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route
            path="password-recovery-one"
            element={<PasswordRecoveryOne />}
          />
          <Route
            path="password-recovery-two"
            element={<PasswordRecoveryTwo />}
          />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="my-account-edit" element={<MyAccountEdit />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
