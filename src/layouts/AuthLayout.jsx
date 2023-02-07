import { Navbar } from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full bg-app-zinc flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};
