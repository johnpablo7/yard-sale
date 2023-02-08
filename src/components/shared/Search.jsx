import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="hidden md:flex lg:hidden items-center md:gap-6 gap-4">
      <div className="relative">
        <RiSearchLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          className="bg-app-alabaster md:w-[250px] rounded-lg md:py-1 py-2 px-8 outline-none border border-gray-200"
          placeholder="Search product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
