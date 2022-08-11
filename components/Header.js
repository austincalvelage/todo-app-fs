import { IconTodo } from './IconTodo'
import { IconMoon } from './IconMoon'
import { IconSun } from './IconSun'
import { NavBar } from './NavBar'
export const Header = () => {
  return (
    <header className='flex flex-col '>
    <NavBar />
      <div className='flex justify-between items-center py-5'>
        <IconTodo />
        <IconMoon />
      </div>
    </header>
  )
}
