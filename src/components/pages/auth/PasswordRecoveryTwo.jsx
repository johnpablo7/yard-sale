import { Link } from "react-router-dom";
import email from "../../../../assets/icons/email.svg";
import logoYard from "../../../../assets/logos/logo_yard_sale.svg";

export const PasswordRecoveryTwo = () => {
  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full flex flex-col items-center">
      <img
        src={logoYard}
        alt="logo_yard_sale"
        className="mx-auto w-36 lg:hidden"
      />
      <h1 className="text-lg font-bold text-center mt-20">
        Email has been sent!
      </h1>
      <p className="text-lg text-boulder leading-5 mt-2 text-center">
        Please check your inbox for instructions on how to reset the password
      </p>

      <div className="rounded-full bg-alabaster w-40 py-12 my-8">
        <img src={email} alt="email" className="mx-auto w-24 " />
      </div>

      <button className="bg-primary text-white w-full rounded-lg py-4 mb-7 hover:bg-green-700 transition-colors">
        <Link to="/">Login</Link>
      </button>

      <div className="text-boulder text-center text-sm">
        Didn’t receive the email?
        <Link
          to="/recuperacion-password/:slug"
          className="text-primary text-sm px-1"
        >
          Resend
        </Link>
      </div>
    </div>
  );
};
