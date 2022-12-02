import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="bg-app-white min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};
