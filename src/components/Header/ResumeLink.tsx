export default function ResumeLink({ clicked }: { clicked: boolean }) {
	return (
		<a
			href='https://inttolong.github.io/Resume/'
			target='_blank'
			className={`group px-4 py-3 rounded-sm md:border-2 text-primary-white bg-primary-black w-[153px] h-14 gap-2 hover:bg-primary-neutral active:text-primary-black active:bg-primary-white active:shadow-bottom md:flex-center ${clicked? 'flex-center' : 'hidden'}`}>
			<span className='font-semibold text-[16px]/[20px]'>Resume</span>{' '}
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M10.8335 9.16671L17.6668 2.33337'
					className='group-active:stroke-black'
					stroke='#fff'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M18.3335 5.66663V1.66663H14.3335'
					className='group-active:stroke-black'
					stroke='#fff'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333'
					className='group-active:stroke-black'
					stroke='#fff'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</a>
	);
}
