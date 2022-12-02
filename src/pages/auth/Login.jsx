import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiLockLine } from "react-icons/ri";
// import { RiMailLine } from "react-icons/ri";
import logoYard from "../../../public/assets/logos/logo_yard_sale.svg";

export const Login = () => {
  const [showPasswordFirst, setShowPasswordFirst] = useState(false);
  const [showPasswordSecond, setShowPasswordSecond] = useState(false);

  const handleShowPasswordFirst = () => {
    setShowPasswordFirst(!showPasswordFirst);
  };
  const handleShowPasswordSecond = () => {
    setShowPasswordSecond(!showPasswordSecond);
  };

  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full">
      <img src={logoYard} alt="logo_yard_sale" className="mx-auto w-36" />
      <h1 className="text-lg font-bold text-center mt-16">
        Create a new password
      </h1>
      <p className="text-lg text-app-silver mt-2">
        Enter a new password for your account
      </p>

      <form className="flex flex-col">
        <label className="text-sm font-bold mb-1 mt-10">Password</label>
        <div className="relative mb-6">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPasswordFirst ? "text" : "password"}
            className="bg-app-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="************"
          />
          {showPasswordFirst ? (
            <RiEyeOffLine
              onClick={handleShowPasswordFirst}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPasswordFirst}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <label className="text-sm font-bold mb-1">Re-enter password</label>
        <div className="relative mb-6">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPasswordSecond ? "text" : "password"}
            className="bg-app-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="************"
          />
          {showPasswordSecond ? (
            <RiEyeOffLine
              onClick={handleShowPasswordSecond}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPasswordSecond}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          {/* <button className="bg-app-green text-white w-full rounded-lg py-2 mt-2 hover:scale-105 transition-all"> */}
          <button className="bg-app-green text-white w-full rounded-lg py-4 mt-2 hover:bg-green-800 transition-colors">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
