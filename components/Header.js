import { IconTodo } from "./IconTodo";
import { IconMoon } from "./IconMoon";
import { IconSun } from "./IconSun";
import { NavBar } from "./NavBar";
export const Header = ({toggleModal}) => {
  return (
    <header className="flex flex-col ">
      <NavBar toggleModal={toggleModal}/>
      <div className="flex justify-between items-center py-5">
        <IconTodo />
        <IconMoon />
      </div>
    </header>
  );
};
