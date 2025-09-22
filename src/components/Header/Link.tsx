import { useCursorHover } from '../../hooks/useCursorHover';
import { NavLink } from "../../types/nav";


export default function Link({ title, path }: NavLink) {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <li
      className="group flex flex-col font-semibold hover:font-bold xl:text-xl/[120%]"
      onMouseEnter={() => handleMouseEnter(75)}
      onMouseLeave={() => handleMouseLeave(40)}
    >
      <a href={path}>{title}</a>
      <span
        className={`h-[2px] w-0 border-b-2 border-black transition-all duration-300 ease-in group-hover:w-full`}
      ></span>
    </li>
  );
}
