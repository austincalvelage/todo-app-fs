import React from "react";
import classNames from "classnames";
import { IconCross } from "./IconCross";

export const AboutModal = ({isOpen, toggleModal}) => {
  return (
    <div className={classNames("absolute inset-0 z-20 bg-purple-400/40 h-screen w-screen flex justify-center items-center", isOpen ? 'flex' : 'hidden')}>
      <div className="flex flex-col bg-black/70  max-w-md rounded-md shadow-lg pt-5 pb-10 px-10 space-y-4">
        <IconCross
          fill="#fff"
          tailwindStyles="self-end"
          width="20"
          height="20"
          onClick={toggleModal}
        />
        <h1 
          className="text-white bg-purple-400/80 border border-white text-center text-xl font-bold p-4 rounded-md max-w-md"
        >
          ABOUT
        </h1>
        <p className="text-white bg bg-purple-400/80 border indent-5 border-white text-base p-4 rounded-md max-w-sm">
          A fullstack todo app built using NEXTJS, Tailwind, and SupaBase. When
          using as a guest Todos will be saved to your local storage. Creating
          an account and logging in will allow you to save your Todos thanks to
          the power of SupaBase!
        </p>
      </div>
    </div>
  );
};
