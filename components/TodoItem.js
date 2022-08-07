import { IconCross } from "./IconCross"

export const TodoItem = () => {
  return (
    <div className="flex items-center gap-3 w-full px-5 py-3.5 rounded-t-md border-b-[1px] border-[#E3E4F1]">
      <input type="checkbox" name="inputCheckbox" className='h-5 w-5 rounded-full border-[#E3E4F1] hover:cursor-pointer' />
      <span className="mr-auto text-xs text-[#494C6B]">Complete online javascript course</span>
      <IconCross />
    </div>
  )
}
