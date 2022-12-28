import React, { useState } from "react";
import { RiArrowDropDownLine, RiSearchLine } from "react-icons/ri";

export const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <RiSearchLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          className="bg-app-alabaster w-[339px] rounded-lg py-2 px-8 outline-none border border-gray-200"
          placeholder="Search product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <p className="font-bold text-sm">Order:</p>
        <p className="pl-2 text-sm text-app-boulder">Most recent</p>
        <RiArrowDropDownLine className="text-2xl translate-y-0.5" />
      </div>
    </div>
  );
};
