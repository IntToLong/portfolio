import SocialMedia from './SocialMedia';
import girl from '../../assets/girlWithLaptop.svg';

export default function Hero() {
	return (
		<div className='px-4 sm:px-6 md:px-20 lg:px-28 flex-center flex-col-reverse md:flex-row  justify-evenly md:my-15'>
			<section className='flex flex-col gap-8 md:w-1/2'>
				<div className='flex flex-col gap-3 lg:gap-5 text-[28px]/[114%] lg:text-5xl/[117%] tracking-tight'>
					<h2>
						<span>Hello, I`am</span>{' '}
						<span className='font-extrabold'>Natalia.</span>{' '}
					</h2>
					<p>
						<span className='font-extrabold'>Frontend </span>
						<span className='text-primary-white text-stroke-1 text-stroke-primary-black font-extrabold'>
							Developer
						</span>
					</p>
					<p>
						<span>Based In </span>
						<span className='font-extrabold'>Poland.</span>
					</p>
				</div>
				<p className='text-zinc-500 font-normal text-base/6'>
					I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s, when an unknown printer took a galley
					of type and scrambled it to specimen book.
				</p>
				<div className='lg:mt-10'>
					<SocialMedia />
				</div>
			</section>

			<div className='md:w-1/2 flex-center'>
				<img
					src={girl}
					alt='girl with laptop'
					className='sm:w-[539px] xl:w-630'
				/>
			</div>
		</div>
	);
}
