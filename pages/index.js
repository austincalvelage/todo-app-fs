import Head from 'next/head'
import { Header } from '../components/Header'
import { TodoInput } from '../components/TodoInput'
import { Todos } from '../components/Todos'

export default function Home() {
  return (
    <>
      <Head />
      <div className='flex justify-center font-josefin-sans h-screen bg-hero-light-mobile bg-no-repeat bg-[length:100%_200px] sm:bg-hero-light-desktop sm:bg-[length:100%_300px]'>
        <main className='w-full px-6 sm:max-w-xl '>
          <Header />
          <div className='space-y-4 round-md'>
            <TodoInput />
            <Todos />
          </div>

        </main>
      </div>
    </>
  )
}
