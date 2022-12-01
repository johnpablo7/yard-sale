import { HomePage } from "../components/HomePage";
import { LoginPage } from "../components/LoginPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    text: "Home",
    private: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    text: "Login",
    private: false,
    publicOnly: true,
  },
];
