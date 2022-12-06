import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layouts
import { AuthLayout } from "./layouts/auth/AuthLayout";

// Pages
import { Error404 } from "./pages/404";
import { Login } from "./pages/auth/Login";
import { NewPassword } from "./pages/auth/NewPassword";
import { RecoveryPassword } from "./pages/auth/RecoveryPassword";
import { Register } from "./pages/auth/Register";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="nuevo-password" element={<NewPassword />} />
          <Route
            path="recuperacion-password/:slug"
            element={<RecoveryPassword />}
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
