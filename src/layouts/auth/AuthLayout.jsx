import { Outlet } from "react-router-dom";
import { DestokNavbar } from "../../components/common/DestokNavbar";

export const AuthLayout = () => {
  return (
    <div className="bg-app-white min-h-screen p-5 md:py-5 md:px-16 flex items-center justify-center">
      <DestokNavbar />
      <Outlet />
    </div>
  );
};
