import { projectsData } from '../../constants';
import { useCursorHover } from '../../hooks/useCursorHover';
import Project from './Project';

export default function Projects() {
	const { handleMouseEnter, handleMouseLeave } = useCursorHover();
	return (
		<section
			className='px-4 sm:px-6 md:px-15 xl:px-28 my-5 sm:py-10 md:my-20'
			id='projects'>
			<h2
				className='text-center text-[28px]/[114%] lg:text-[48px]/[114%] tracking-tight mb-10'
				onMouseEnter={() => handleMouseEnter(0)}
				onMouseLeave={() => handleMouseLeave(40)}>
				<span className='pr-4'>My</span>
				<span className='font-extrabold'>Projects</span>
			</h2>
			<div className='grid lg:grid-cols-2 gap-3 md:gap-10 lg:gap-15 xl:gap-30'>
				{projectsData.map((project) => {
					return (
						<Project
							key={project.number}
							imgSrc={project.imgSrc}
							imgAlt={project.imgAlt}
							number={project.number}
							title={project.title}
							description={project.description}
							demo={project.demo}
							github={project.github}
							technologies={project.technologies}
						/>
					);
				})}
			</div>
		</section>
	);
}
