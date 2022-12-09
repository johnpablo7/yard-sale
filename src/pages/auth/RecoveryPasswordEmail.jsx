import { Link } from "react-router-dom";
import email from "../../../public/assets/icons/email.svg";
import logoYard from "../../../public/assets/logos/logo_yard_sale.svg";

export const RecoveryPasswordEmail = () => {
  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full flex flex-col items-center">
      <img
        src={logoYard}
        alt="logo_yard_sale"
        className="mx-auto w-36 lg:hidden"
      />
      <h1 className="text-lg font-bold text-center mt-20">
        ¡E-mail ha sido enviado!
      </h1>
      <p className="text-lg text-app-boulder leading-5 mt-2 text-center">
        Consulte su bandeja de entrada para obtener instrucciones sobre cómo
        restablecer la contraseña.
      </p>

      <div className="rounded-full bg-app-alabaster w-36 py-10 my-8">
        <img src={email} alt="email" className="mx-auto w-24 " />
      </div>

      <button className="bg-app-green text-white w-full rounded-lg py-4 mb-7 hover:bg-green-700 transition-colors">
        <Link to="/">Iniciar Sesión</Link>
      </button>

      <div className="text-app-boulder text-center text-sm">
        ¿No recibiste el correo electrónico?
        <Link
          to="/recuperacion-password/:slug"
          className="text-app-green text-sm px-1"
        >
          reenviar
        </Link>
      </div>
    </div>
  );
};
