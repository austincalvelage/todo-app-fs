import { IconTodo } from './IconTodo'
import { IconMoon } from './IconMoon'
import { IconSun } from './IconSun'

export const Header = () => {
  return (
    <header className='flex justify-between items-center py-12'>
      <IconTodo />
      <IconMoon />
    </header>
  )
}
