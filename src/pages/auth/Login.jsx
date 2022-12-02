// import { RiMailLine } from "react-icons/ri";
import { RiLockLine } from "react-icons/ri";
import logoYard from "../../../public/assets/logos/logo_yard_sale.svg";

export const Login = () => {
  return (
    <div className="p-4">
      <img src={logoYard} alt="logo_yard_sale" className="" />
      <h1 className="text-lg font-bold text-center">Create a new password</h1>
      <p className="text-lg text-app-silver">
        Enter a new password for your account
      </p>

      <form className="flex flex-col gap-4">
        <div className="relative">
          <label className="text-sm font-bold">Password</label>
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            className="bg-app-alabaster w-full rounded-lg py-2 px-8 outline-none"
            placeholder="************"
          />
        </div>
        <div className="relative">
          <label className="text-sm font-bold">Re-enter password</label>
          <input
            type="password"
            className="bg-app-alabaster w-full rounded-lg py-2 px-4 outline-none"
            placeholder="************"
          />
        </div>
        <div>
          <button className="bg-app-green text-white w-full rounded-lg py-2 mt-5">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
