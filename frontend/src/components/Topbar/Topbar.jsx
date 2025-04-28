import React from "react";
import { FaStar, FaSearch, FaChevronDown } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex items-center h-14 px-6 border-b border-[#222] bg-[#232b3e] sticky top-0 z-30">
      <span className="text-gray-300 text-sm flex items-center gap-2">
        <span className="font-semibold">Team Space</span>
        <span>/</span>
        <span>Projects</span>
        <span>/</span>
        <span className="font-semibold">Project 1</span>
        <FaChevronDown className="ml-2 text-xs" />
      </span>
      <button className="ml-6 text-gray-400 hover:text-yellow-400 flex items-center gap-1">
        <FaStar />
        <span>Add to favorites</span>
      </button>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <input
            className="bg-[#23272f] border border-[#333] rounded px-3 py-1 text-sm text-white focus:outline-none"
            placeholder="Search..."
          />
          <FaSearch className="absolute right-2 top-2 text-gray-500 text-xs" />
        </div>
        <button className="bg-[#b388ff] text-white px-3 py-1 rounded text-sm font-semibold ml-2">
          + New
        </button>
      </div>
    </div>
  );
}