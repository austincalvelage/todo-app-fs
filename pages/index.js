import { useState } from 'react'

import Head from 'next/head'

import { Header } from '../components/Header'
import { TodoInput } from '../components/TodoInput'
import { Todos } from '../components/Todos'
import { FilterTodos } from '../components/FilterTodos'
import { Auth } from '../components/Auth'
import { About } from '../components/About'

export default function Home() {
  const [aboutStatus, setAboutStatus] = useState(false);

  function modalClickHandler() {
    setAboutStatus(prevState => !prevState);
  }

  return (
    <>
      <Head />
      <About isOpen={aboutStatus} clickHandler={modalClickHandler}/>
      <div className='flex justify-center font-josefin-sans h-screen bg-hero-light-mobile bg-no-repeat bg-[length:100%_200px] sm:bg-hero-light-desktop sm:bg-[length:100%_300px] bg-[#FAFAFA]'>
        <main className='w-full px-6 sm:max-w-xl'>
          <Header clickHandler={modalClickHandler}/>
          <div className='space-y-4 round-md'>
            <TodoInput />
            <Todos />
            <FilterTodos />
          </div>
          <span 
            className='block text-[#9495A5] text-center text-sm w-full mt-10'>
            Drag and drop to reorder list
          </span>
        </main>
      </div>
    </>
  )
}
