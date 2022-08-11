import { IconTodo } from './IconTodo'
import { IconMoon } from './IconMoon'
import { IconSun } from './IconSun'
import { NavBar } from './NavBar'
export const Header = ({clickHandler}) => {
  return (
    <header className='flex flex-col '>
    <NavBar clickHandler={clickHandler}/>
      <div className='flex justify-between items-center py-5'>
        <IconTodo />
        <IconMoon />
      </div>
    </header>
  )
}
