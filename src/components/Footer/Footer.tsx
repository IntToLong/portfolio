import Logo from '../Header/Logo';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className='flex justify-between items-center bg-primary-black text-primary-white px-5 md:px-20 lg:px-[112px] py-5'>
			<Logo color='white' />
			<p className='flex items-center gap-2'>
				<span className='text-lg'>&#169;</span>{' '}
				<span>{year} Personal Portfolio</span>
			</p>
		</footer>
	);
}
