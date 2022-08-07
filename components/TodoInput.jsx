import { IconCheck } from './IconCheck'
export const TodoInput = () => {
  return (
    <form className="bg-white flex items-center gap-3 w-full px-5 py-4 rounded-md">
      <input type="checkbox" name="inputCheckbox" disabled/>
      <input type="text" placeholder='Create a new todo...' name='todoInput' className='bg-transparent text-xs' />
      <IconCheck className="p-10 bg-black"/>
    </form>
  )
}
