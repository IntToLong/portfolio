import { projectsData } from '../../constants';
import Project from './Project';

export default function Projects() {
	return (
		<section className='px-4 sm:px-6 md:px-20 lg:px-28 md:my-20' id='projects'>
			<h2 className='text-center text-[28px]/[114%] lg:text-[48px]/[114%] tracking-tight mb-10'>
				<span className='pr-4'>My</span>
				<span className='font-extrabold'>Projects</span>
			</h2>
			<div>
				{projectsData.map((project) => {
					let styles = '';
					if (project.number % 2 === 0) {
						styles = 'md:flex-row-reverse';
					}
					return (
						<Project
							key={project.number}
							imgSrc={project.imgSrc}
							imgAlt={project.imgAlt}
							number={project.number}
							title={project.title}
							description={project.description}
							path={project.path}
                            technologies={project.technologies}
                            styles={styles}
						/>
					);
				})}
			</div>
		</section>
	);
}
