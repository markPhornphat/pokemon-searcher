"use client";

import SearchIcon from "./searchIcon";

export function Button({ className = "", ...props }) {
  return (
    // <button
    //   className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ${className}`}
    //   {...props}
    // />
    <button
      className={`w-10 h-10 rounded-full relative overflow-hidden border-[3px] border-black shadow-lg ${className}`}
      {...props}
      aria-label="Search"
    >
      {/* Top red half */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600"></div>

      {/* Bottom white half */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

      {/* Middle line */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 bg-black border-[2px] "></div>

      {/* Middle white ring */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white border-[2px] border-black rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"></div>

      {/* <div className="z-20 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <SearchIcon className="w-4.5 h-4.5" />
      </div> */}
    </button>
  );
}
