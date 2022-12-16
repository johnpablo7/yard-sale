import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layouts
import { AuthLayout } from "./layouts/auth/AuthLayout";

// Pages
import { Error404 } from "./pages/404";
import { ChangePassword } from "./pages/auth/ChangePassword";
import { CreateAccount } from "./pages/auth/CreateAccount";
import { Login } from "./pages/auth/Login";
import { MyAccount } from "./pages/auth/MyAccount";
import { MyAccountEdit } from "./pages/auth/MyAccountEdit";
import { RecoveryPassword } from "./pages/auth/RecoveryPassword";
import { RecoveryPasswordEmail } from "./pages/auth/RecoveryPasswordEmail";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="crear-cuenta" element={<CreateAccount />} />
          <Route
            path="recuperacion-password/:slug"
            element={<RecoveryPassword />}
          />
          <Route
            path="recuperacion-password-email/:slug"
            element={<RecoveryPasswordEmail />}
          />
          <Route
            path="restablecer-password/:token"
            element={<ChangePassword />}
          />
          <Route path="mi-cuenta" element={<MyAccount />} />
          <Route path="mi-cuenta-editar" element={<MyAccountEdit />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
