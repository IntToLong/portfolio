import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import NavBar from './NavBar';
import ResumeLink from './ResumeLink';
import crossIcon from '../../assets/cross.svg';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header
			className={`
		flex justify-between md:items-center px-5 md:px-20 lg:px-[112px] py-6 ${
			isMenuOpen ? 'h-screen flex-col justify-start gap-8 ml-20' : 'h-auto'
		} transition-all duration-300`}>
			{isMenuOpen ? (
				<button
					className='absolute right-4 cursor-pointer h-[45px]'
					onClick={() => setIsMenuOpen(false)}>
					<img
						src={crossIcon}
						alt='close menu icon'
						className='w-7 '
					/>
				</button>
			) : (
				<>
					<Logo color='black' />
					<BurgerMenu onclick={() => setIsMenuOpen(true)} />
				</>
			)}
			<NavBar isMenuOpen={isMenuOpen} />
			<ResumeLink isMenuOpen={isMenuOpen} />
		</header>
	);
}
