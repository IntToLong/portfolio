import girl from '../../assets/girl.svg';
export default function AboutMe() {
	return (
		<section
			className='p-4 sm:p-6 md:p-20 lg:px-28 flex flex-col lg:flex-row gap-10 my-10 bg-primary-black'
			id='about'>
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
						I am a highly motivated and detail-oriented Entry-Level Front-End
						Developer with a strong passion for building modern and responsive
						web applications. My foundation is built on core technologies like
						HTML, CSS, JavaScript (ES6+), and React. Through a series of
						hands-on projects, I have developed a solid understanding of
						component-based architecture, seamless API integration, and creating
						user-friendly interfaces. My eagerness to contribute to a
						collaborative team and grow within a dynamic development environment
						drives me to consistently expand my skill set.
					</p>
					<p>
						My technical expertise is complemented by practical experience with
						tools and libraries essential for modern development. I am
						proficient in state management with Redux Toolkit, testing with Jest
						and React Testing Library, and version control using Git and GitHub.
						I am also familiar with full-stack technologies such as Node.js and
						MongoDB, which allows me to understand both the front-end and
						back-end aspects of a project. My formal training, including courses
						from Academind and the EPAM UpSkill Program, has provided me with a
						comprehensive understanding of industry best practices.
					</p>
					<p>
						Beyond my technical skills, I am a committed problem-solver with a
						strong analytical mindset, honed during my academic studies. I have applied this disciplined approach to my projects, such as QuickQuiz AI, a responsive application that leverages Gemini AI, and the Ukrify Chrome Extension, which enhances productivity for bilingual users. These projects demonstrate my ability to translate complex ideas into functional, clean, and intuitive digital products.
					</p>
				</article>
			</div>
		</section>
	);
}
