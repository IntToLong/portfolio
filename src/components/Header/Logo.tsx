import logoImg from '../../assets/logo.svg';

export default function Logo() {
	return (
		<div className='flex-center'>
			<img
				src={logoImg}
				alt='logo icon'
				className='hover:scale-125 duration-300 ease-in cursor-pointer'
			/>
			{/* <p className='text-[16px]/[20px] font-semibold italic'>Portfolio</p> */}
		</div>
	);
}
