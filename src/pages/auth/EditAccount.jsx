import { Link } from "react-router-dom";

export const EditAccount = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Toda la funcionalidad de edit");
  };

  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col mt-20">
        <label className="text-lg font-bold">My account</label>
        <label className="text-sm font-bold mb-1 mt-12">Name</label>
        <div className="relative mb-6">
          <p className="bg-app-white text-app-boulder w-full py-2">
            Camila Yokoo
          </p>
        </div>
        <label className="text-sm font-bold mb-1">Email address</label>
        <div className="relative mb-6">
          <p className="bg-app-white text-app-boulder w-full py-2">
            camila_yokoo@gmail.com
          </p>
        </div>
        <label className="text-sm font-bold mb-1">Password</label>
        <div className="relative mb-6">
          <p className="bg-app-white text-app-boulder w-full py-2 outline-none">
            ************
          </p>
        </div>
        <div>
          <button className=" text-app-green w-full rounded-lg mt-36 py-4 hover:bg-green-700 hover:text-app-white transition-colors outline-none border border-app-green font-bold">
            <Link to="/registro">Edit</Link>
          </button>
        </div>
      </form>
    </div>
  );
};
