import { Navbar } from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="bg-app-zinc min-h-screen p-5 md:py-5 md:px-16 flex items-center justify-center">
      <Navbar />
      <Outlet />
    </div>
  );
};
