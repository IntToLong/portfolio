import { linksInfo } from "../../constants";
import Link from "./Link";
import { NavLink } from "../../types/nav";

export default function NavBar({ isMenuOpen }: { isMenuOpen: boolean }) {
  const links = linksInfo.map((link: NavLink) => (
    <Link key={link.path} title={link.title} path={link.path} />
  ));

  return (
    <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
      <ul
        className={`md:flex md:flex-row ${
          isMenuOpen ? "mt-30 flex flex-col" : "hidden"
        } gap-8 text-[16px]/[20px]`}
      >
        {links}
      </ul>
    </nav>
  );
}
