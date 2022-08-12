import React from "react";

import { IconCross } from "./IconCross";

export const AboutModal = () => {
  return (
    <div className="absolute inset-0 z-20 bg-purple-400/40 h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-black/60  max-w-md rounded-md space-y-5 px-6 py-5 shadow-lg">
        <IconCross
          fill="#fff"
          tailwindStyles="self-end"
          width="20"
          height="20"
        />
        <h1 className="text-white bg-purple-400/60 border border-white text-center text-xl font-bold p-4 rounded-md max-w-md">
          ABOUT
        </h1>
        <p className="text-white bg bg-purple-400/60 border indent-5 border-white text-base p-4 rounded-md max-w-sm">
          A fullstack todo app built using NEXTJS, Tailwind, and SupaBase. When
          using as a guest Todos will be saved to your local storage. Creating
          an account and logging in will allow you to save your Todos thanks to
          the power of SupaBase!
        </p>
      </div>
    </div>
  );
};
