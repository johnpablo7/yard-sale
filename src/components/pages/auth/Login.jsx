import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { authAtom } from "../../../store/auth";
import { toast } from "react-toastify";
import logoYard from "../../../../assets/logos/logo_yard_sale.svg";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLockLine,
  RiMailLine,
} from "react-icons/ri";

export const Login = () => {
  const setAuth = useSetAtom(authAtom);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password, email);

    if ([password, email].includes("")) {
      toast.error("Invalid user ID and password combination ", {
        theme: "dark",
      });
      return;
    }

    if (password.length < 6) {
      toast.warning("The password must contain at least 6 characters", {
        theme: "dark",
      });
      return;
    }

    console.log("Toda la funcionalidad de inicio de sesión");

    setAuth({ email });
    navigate("/");
  };

  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full">
      <img
        src={logoYard}
        alt="logo_yard_sale"
        className="mx-auto w-52 lg:hidden mt-24"
      />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-sm font-bold mb-1">Email address</label>
        <div className="relative mb-6">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className="bg-app-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="camilayokoo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className="text-sm font-bold mb-1">Password</label>
        <div className="relative mb-6">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="bg-app-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          {/* <button className="bg-app-green text-white w-full rounded-lg py-2 my-7 hover:scale-105 transition-all"> */}
          <button
            type="submit"
            className="bg-app-green text-white w-full rounded-lg py-4 my-4 hover:bg-green-700 transition-colors font-bold"
          >
            Log in
          </button>
        </div>
      </form>
      <div className="text-app-green text-center text-sm mb-24">
        <Link to="recuperacion-password/:slug">Forgot my password?</Link>
      </div>
      <div>
        <button className=" text-app-green w-full rounded-lg py-4 hover:bg-green-700 hover:text-app-white transition-colors outline-none border border-app-green font-bold">
          <Link to="/registro">Sign up</Link>
        </button>
      </div>
    </div>
  );
};
