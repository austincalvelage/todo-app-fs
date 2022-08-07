import { IconCheck } from './IconCheck'
export const TodoInput = () => {
  return (
    <form className="bg-white flex items-center gap-3 w-full px-5 py-3.5 rounded-md">
      <input type="checkbox" name="inputCheckbox" className='h-5 w-5 rounded-full border-gray-400' disabled/>
      <input type="text" placeholder='Create a new todo...' name='todoInput' className='bg-transparent text-xs border-none w-full p-0' />
    </form>
  )
}
