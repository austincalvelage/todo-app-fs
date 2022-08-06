export const TodoInput = () => {
  return (
    <form>
      <input type="checkbox" name="inputCheckbox" disabled/>
      <input type="text" placeholder='Create a new todo...' name='todoInput' />
    </form>
  )
}
