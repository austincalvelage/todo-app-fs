import { useState } from 'react';
import { clsx } from 'clsx';


import { IconCross } from "./IconCross"
 
export const About = ({isOpen, clickHandler}) => {
  return (
    <div className={clsx('absolute', 'inset-0 ', 'z-20','bg-black/80', 'h-screen', 'w-screen', 'flex', 'justify-center', 
    'items-center', {'hidden' : !isOpen, 'flex' : isOpen})}>
      <div className='flex flex-col bg-purple-500/40 w-1/2 h-1/2 rounded-md space-y-2 px-6 py-4 '>
        <IconCross fill="#fff" tailwindStyles="self-end" width="20" height="20" onClick={clickHandler}/>
        <h1 className='text-white text-center underline text-xl font-bold'>ABOUT</h1>
        <p className='text-white text-base'>
          A fullstack todo app built using NEXTJS, Tailwind, and SupaBase. When using as a guest Todos
          will be saved to your local storage. Creating an account and logging in will allow you to save
          your Todos thanks to the power of SupaBase!
        </p>
      </div>
    </div>
   )
 }
 