import { Navbar } from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-100 flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};
