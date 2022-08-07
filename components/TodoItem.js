import { IconCross } from "./IconCross"

export const TodoItem = () => {
  return (
    <div className="flex items-center gap-3 w-full px-5 py-3.5 rounded-t-md border-b-2 border-gray-400">
      <input type="checkbox" name="inputCheckbox" className='h-5 w-5 rounded-full border-gray-400' />
      <span className="mr-auto">Complete online javascript course</span>
      <IconCross />
    </div>
  )
}
