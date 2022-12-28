import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layouts

// Pages

import { CreateAccount } from "../components/pages/auth/CreateAccount";

import { Login } from "../components/pages/auth/Login";
import { MyAccount } from "../components/pages/auth/MyAccount";
import { PasswordRecoveryOne } from "../components/pages/auth/PasswordRecoveryOne";
import { PasswordRecoveryTwo } from "../components/pages/auth/PasswordRecoveryTwo";

import { Orders } from "../components/pages/home/Orders";
import { Order } from "../components/pages/home/Order";
import { Home } from "../components/pages/home/Home";
import { Error404 } from "../components/pages/404";
import { AuthLayout } from "../layouts/AuthLayout";

import { MyAccountEdit } from "../components/pages/auth/MyAccountEdit";
import { NewPassword } from "../components/pages/auth/NewPassword";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          {/* Desktop Page Views */}
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

          {/* Mobile Page Views */}
        </Route>

        {/* Not Found */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
