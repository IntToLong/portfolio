import { linksInfo } from '../../constants';
import Link from './Link';
import { NavLink } from '../../types/nav';

export default function NavBar({ isMenuOpen }: { isMenuOpen: boolean }) {
	const links = linksInfo.map((link: NavLink) => (
		<Link
			key={link.path}
			title={link.title}
			path={link.path}
		/>
	));

	return (
		<ul
			className={`md:flex md:flex-row ${
				isMenuOpen ? 'flex flex-col mt-30' : 'hidden'
			} gap-8 text-[16px]/[20px]`}>
			{links}
		</ul>
	);
}
