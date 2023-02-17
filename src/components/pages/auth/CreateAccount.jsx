import { useState } from "react";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLockLine,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password, email);

    if ([name, lastname, password, confirmPassword, email].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }

    if (password.length < 6) {
      toast.warning("El password debe contener al menos 6 caracteres", {
        theme: "dark",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Los passwords no son iguales", {
        theme: "dark",
      });
      return;
    }

    console.log("Toda la funcionalidad de registro");
  };

  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col mt-16">
        <label className="text-lg font-bold mb-11">My account</label>

        <div className="relative mb-6">
          <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="bg-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="First Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="relative mb-6">
          <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="bg-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="Last Name *"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="relative mb-6">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="email"
            className="bg-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="E-mail *"
            autoComplete="false"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative mb-6">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="bg-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="Password"
            value={password}
            autoComplete="false"
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

        <div className="relative mb-12">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="bg-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <button className="bg-primary text-white w-full rounded-lg py-4 hover:bg-green-700 transition-colors font-bold">
            <Link to="registro">Create account</Link>
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between mt-4">
        <div>
          Do you already have an account?
          <Link
            to="/"
            className="text-green-600 font-medium hover:underline transition-all px-2"
          >
            Log in
          </Link>
        </div>
        <div>
          <Link
            to="/recuperacion-password/:slug"
            className="text-green-600 font-medium hover:underline transition-all px-2"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};
