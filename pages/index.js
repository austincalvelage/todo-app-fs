import Head from 'next/head'
import { TodoInput } from '../components/TodoInput'

export default function Home() {
  return (
    <div className='font-josefin-sans h-screen bg-hero-light-mobile sm:bg-hero-light-desktop bg-no-repeat bg-contain'>
      <TodoInput />
    </div>
  )
}
