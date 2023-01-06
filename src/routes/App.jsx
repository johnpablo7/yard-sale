import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layouts
import { AuthLayout } from "../layouts/AuthLayout";
// Desktop Page Views
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
