import { IconMoon } from './IconMoon'
import { IconSun } from './IconSun'

export const Header = () => {
  return (
    <header className='flex justify-between items-center py-12'>
      <h1 className='text-white text-3xl font-bold tracking-widest'>TODO</h1>
      <IconMoon />
    </header>
  )
}
