import React from "react";

export const NavBar = ({toggleModal}) => {
  return (
    <nav className="relative flex gap-1.5 justify-center pt-5">
      <button className="px-3 py-2 bg-white/40 text-white  font-bold rounded-md shadow-md hover:bg-purple-500">
        LOGIN
      </button>
      <button className="px-3 py-2 bg-white/40 text-white  font-bold rounded-md shadow-md hover:bg-purple-500" onClick={toggleModal}>
        ABOUT
      </button>
    </nav>
  );
};
