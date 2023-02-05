import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { Home } from "../components/pages/home/Home";
import { Order } from "../components/pages/home/Order";
import { Orders } from "../components/pages/home/Orders";
import { CreateAccount } from "../components/pages/auth/CreateAccount";
import { MyAccount } from "../components/pages/auth/MyAccount";
import { MyAccountEdit } from "../components/pages/auth/MyAccountEdit";
import { Login } from "../components/pages/auth/Login";
import { PasswordRecoveryOne } from "../components/pages/auth/PasswordRecoveryOne";
import { PasswordRecoveryTwo } from "../components/pages/auth/PasswordRecoveryTwo";
import { NewPassword } from "../components/pages/auth/NewPassword";
import { Error404 } from "../components/pages/404";
import { Clothes } from "../components/pages/Clothes";
import { Electronics } from "../components/pages/Electronics";
import { Furniture } from "../components/pages/Furniture";
import { Toys } from "../components/pages/Toys";
import { Others } from "../components/pages/Others";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="orders" element={<Orders />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="my-account-edit" element={<MyAccountEdit />} />
          <Route path="login" element={<Login />} />
          <Route
            path="password-recovery-one"
            element={<PasswordRecoveryOne />}
          />
          <Route
            path="password-recovery-two"
            element={<PasswordRecoveryTwo />}
          />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="toys" element={<Toys />} />
          <Route path="others" element={<Others />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
