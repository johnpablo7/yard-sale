import { useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logoYard from "../../../public/assets/logos/logo_yard_sale.svg";

export const RecoveryPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password, email);

    if ([email].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }

    console.log("Toda la funcionalidad de recovery-password");
  };

  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full">
      <img
        src={logoYard}
        alt="logo_yard_sale"
        className="mx-auto w-36 lg:hidden"
      />
      <h1 className="text-lg font-bold text-center mt-20">Password recovery</h1>
      <p className="text-lg text-app-boulder leading-5 mt-2 text-center">
        Inform the email address used to create your account
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-sm font-bold mb-1 mt-7">Email address</label>
        <div className="relative mb-6">
          <input
            type="email"
            className="bg-app-alabaster w-full rounded-lg py-2 px-2 outline-none border border-gray-200"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          {/* <button className="bg-app-green text-white w-full rounded-lg py-2 my-7 hover:scale-105 transition-all"> */}
          <button className="bg-app-green text-white w-full rounded-lg py-4 mb-7 hover:bg-green-700 transition-colors">
            <Link to="recuperacion-password-email/:slug">Submit</Link>
          </button>
        </div>
      </form>
      <div className="text-app-green text-center text-sm">
        <Link to="/">Back to log in</Link>
      </div>
    </div>
  );
};
