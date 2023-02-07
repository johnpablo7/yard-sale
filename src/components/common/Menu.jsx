import { Link, useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { authAtom } from "../../store/auth";

export const Menu = () => {
  return (
    <div className="fixed w-[150px] h-auto rounded drop-shadow top-16 md:right-36 bg-app-white border-app-white border outline-none mt-1">
      <ul className="flex flex-col gap-y-6 text-end p-4 py-6 text-app-black">
        <li>
          <Link to="/" className="font-bold">
            My orders
          </Link>
        </li>
        <li>
          <Link to="/" className="font-bold">
            My account
          </Link>
        </li>
        <li className="border-t-2 outline-none pt-5">
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

const LogoutButton = () => {
  const setAuth = useSetAtom(authAtom);
  const navigate = useNavigate();

  const logout = () => {
    setAuth(null);
    navigate("/");
  };

  return (
    <button onClick={logout} className="text-sm text-app-green">
      Sign out
    </button>
  );
};
