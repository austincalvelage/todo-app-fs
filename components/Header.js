import { IconTodo } from './IconTodo'
import { IconMoon } from './IconMoon'
import { IconSun } from './IconSun'

export const Header = () => {
  return (
    <header className='flex justify-between items-center py-10'>
      <IconTodo />
      <IconMoon />
    </header>
  )
}
