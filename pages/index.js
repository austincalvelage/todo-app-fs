import { useState } from "react";

import Head from "next/head";

import { Header } from "../components/Header";
import { TodoInput } from "../components/TodoInput";
import { Todos } from "../components/Todos";
import { FilterTodos } from "../components/FilterTodos";
import { AuthModal } from "../components/AuthModal";
import { AboutModal } from "../components/AboutModal";

export default function Home() {
  const [aboutModalState, setAboutModalState] = useState(false);
  const [authModalState, setAuthModalState] = useState(false);

  function aboutModalToggle() {
    setAboutModalState(prevState => !prevState);
  }
  return (
    <>
      <Head />
      {/* <AuthModal isOpen={authModalState} /> */}
      <AboutModal isOpen={aboutModalState} toggleModal={aboutModalToggle}/>
      <div className="flex justify-center font-josefin-sans h-screen bg-hero-light-mobile bg-no-repeat bg-[length:100%_200px] sm:bg-hero-light-desktop sm:bg-[length:100%_300px] bg-[#FAFAFA]">
        <main className="px-6 w-full sm:max-w-xl">
          <Header toggleModal={aboutModalToggle}/>
          <div className="space-y-4 round-md">
            <TodoInput />
            <Todos />
            <FilterTodos />
          </div>
          <span className="block text-[#9495A5] text-center text-sm w-full mt-10">
            Drag and drop to reorder list
          </span>
        </main>
      </div>
    </>
  );
}
