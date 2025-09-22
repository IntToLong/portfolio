import { NavLink } from "../../types/nav";

export default function Link({ title, path }: NavLink) {
  return (
    <li className="group flex flex-col font-semibold xl:text-xl/[120%]">
      <a href={path}>{title}</a>
      <span
        className={`h-[2px] w-0 border-b-2 border-black transition-all duration-300 ease-in group-hover:w-full`}
      ></span>
    </li>
  );
}
