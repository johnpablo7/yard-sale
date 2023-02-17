import { Link } from "react-router-dom";

export const MyAccount = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Toda la funcionalidad de edit");
  };

  return (
    <div className="md:w-96 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col mt-20">
        <label className="text-lg font-bold">My account</label>
        <label className="text-sm font-bold mb-1 mt-12">Name</label>
        <div className="relative mb-6">
          <p className="bg-white text-boulder w-full py-2">Camila Yokoo</p>
        </div>
        <label className="text-sm font-bold mb-1">Email address</label>
        <div className="relative mb-6">
          <p className="bg-white text-boulder w-full py-2">
            camilayokoo@gmail.com
          </p>
        </div>
        <label className="text-sm font-bold mb-1">Password</label>
        <div className="relative mb-6">
          <p className="bg-white text-boulder w-full py-2 outline-none">
            ************
          </p>
        </div>
      </form>
      <div>
        <button className=" text-primary w-full rounded-lg mt-28 md:mt-6 py-4 hover:bg-green-700 hover:text-white transition-colors outline-none border border-primary font-bold">
          <Link to="/registro">Edit</Link>
        </button>
      </div>
    </div>
  );
};
