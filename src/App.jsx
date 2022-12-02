import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layouts
import { AuthLayout } from "./layouts/auth/AuthLayout";

// Pages
import { Error404 } from "./pages/404";
import { ChangePassword } from "./pages/auth/ChangePassword";
import { ForgetPassword } from "./pages/auth/forgetPassword";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
          <Route
            path="restablecer-password/:token"
            element={<ChangePassword />}
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
