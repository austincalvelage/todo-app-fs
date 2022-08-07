import Head from 'next/head'
import { Header } from '../components/Header'
import { TodoInput } from '../components/TodoInput'

export default function Home() {
  return (
    <div className='font-josefin-sans h-screen px-6 bg-hero-light-mobile sm:bg-hero-light-desktop bg-no-repeat bg-contain'>
      <Header />
      <TodoInput />
    </div>
  )
}
