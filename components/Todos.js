import { TodoItem } from "./TodoItem"


export const Todos = () => {
  return (
    <div className="bg-white w-full rounded-md drop-shadow-lg">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <div className="flex justify-between px-5 py-3.5">
        <span className="text-[#9495A5] text-xs font-light">5 Items left</span>
        <button className="text-[#9495A5] text-xs font-light">Clear Completed</button>
      </div>
    </div>
  )
}
