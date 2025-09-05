import girl from '../../assets/girl.svg';
export default function AboutMe() {
	return (
		<section className='p-4 sm:p-6 md:p-20 lg:px-28 flex flex-col lg:flex-row gap-10 my-10 bg-primary-black'>
			<div className='lg:w-1/2 flex-center'>
				<img
					src={girl}
					alt='girl illustration'
				/>
			</div>
			<div className='lg:w-1/2'>
				<h3 className='text-[28px]/[114%] lg:text-5xl/[117%] tracking-tight mb-10 text-primary-white'>
					<span className='pr-4'>About</span>{' '}
					<span className='font-extrabold'>Me</span>
				</h3>
				<article className='text-zinc-300 flex flex-col gap-4'>
					<p>
						I'm a passionate, self-proclaimed designer who specializes in full
						stack development (React.js & Node.js). I am very enthusiastic about
						bringing the technical and visual aspects of digital products to
						life. User experience, pixel perfect design, and writing clear,
						readable, highly performant code matters to me.
					</p>
					<p>
						I began my journey as a web developer in 2015, and since then, I've
						continued to grow and evolve as a developer, taking on new
						challenges and learning the latest technologies along the way. Now,
						in my early thirties, 7 years after starting my web development
						journey, I'm building cutting-edge web applications using modern
						technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
						Supabase and much more.
					</p>
					<p>
						When I'm not in full-on developer mode, you can find me hovering
						around on twitter or on indie hacker, witnessing the journey of
						early startups or enjoying some free time. You can follow me on
						Twitter where I share tech-related bites and build in public, or you
						can follow me on GitHub.
					</p>
				</article>
			</div>
		</section>
	);
}
