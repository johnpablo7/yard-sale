import { Outlet } from "react-router-dom";
import { DestokNavbar } from "../../components/common/DestokNavbar";

export const AuthLayout = () => {
  return (
    <div className="bg-app-white min-h-screen flex items-center justify-center p-5 md:p-16">
      <DestokNavbar />
      <Outlet />
    </div>
  );
};
