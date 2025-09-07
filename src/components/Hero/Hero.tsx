import SocialMedia from './SocialMedia';
import girl from '../../assets/girlWithLaptop.svg';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
	return (
		<div className='px-4 sm:px-6 md:px-20 lg:px-28 flex-center flex-col-reverse md:flex-row  justify-evenly md:mb-15 md:mt-10'>
			<section className='flex flex-col gap-8 md:w-1/2'>
				<div className='flex flex-col gap-3 lg:gap-5 text-[28px]/[114%] lg:text-5xl/[117%] tracking-tight'>
					<h2>
						<span>Hello, I`am</span>{' '}
						<TypeAnimation
							sequence={['Nataliia', 1000, '', 1000, 'Nataliia', 1000]}
							wrapper='span'
							speed={50}
							style={{ fontWeight: 800, display: 'inline-block' }}
							repeat={0}
						/>
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
					I am a passionate and highly motivated technology enthusiast with a
					strong focus on building innovative solutions and continuously
					expanding my skills. My goal is to grow as a developer and contribute
					to meaningful projects within the dynamic and ever-evolving tech
					industry, applying my skills to solve real-world problems.
				</p>
				<div className='lg:mt-10'>
					<SocialMedia />
				</div>
			</section>

			<div className='md:w-1/2 flex-center'>
				<img
					src={girl}
					alt='girl with laptop'
					className='sm:w-[539px] xl:w-630 max-h-[750px]'
				/>
			</div>
		</div>
	);
}
