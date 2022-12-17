import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeSignin } from "./components/pages/home/HomeSignin";
// Layouts
import { AuthLayout } from "./layouts/auth/AuthLayout";

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
          <Route path="login" element={<Login />} />
          <Route path="home-signin" element={<HomeSignin />} />
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
