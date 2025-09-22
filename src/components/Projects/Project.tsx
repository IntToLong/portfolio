import { HTMLAttributes } from 'react';
import { motion } from 'motion/react';
import LinkIcon from '../../assets/link.svg?react';
import GitHubIcon from '../../assets/social/github.svg?react';
import { useCursorHover } from '../../hooks/useCursorHover';
import { ProjectType } from '../../types/project';

type ProjectProps = ProjectType & HTMLAttributes<HTMLDivElement>;

export default function Project({
	imgSrc,
	imgAlt,
	number,
	title,
	description,
	demo,
	github,
	technologies,
	...props
}: ProjectProps) {
	const { handleMouseEnter, handleMouseLeave } = useCursorHover();
	return (
		<motion.article
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 3, type: 'spring' }}
			viewport={{ once: true }}
			{...props}
			className='flex flex-col items-start gap-10 border-2 rounded-lg p-3 md:p-10 xl:p-20 bg-primary-black text-primary-white flex-grow'>
			<div className='flex flex-col gap-10'>
				<p className='font-extrabold text-2xl md:text-4xl text-neutral-900 text-primary-white'>
					{number < 10 ? `0${number}` : number}
				</p>
				<h3 className='font-extrabold text-xl md:text-3xl text-neutral-800 tracking-tight text-primary-white'>
					{title}
				</h3>
			</div>
			<p
				className='leading-relaxed text-zinc-300 flex-grow'
				onMouseEnter={() => handleMouseEnter(150)}
				onMouseLeave={() => handleMouseLeave(40)}>
				{description}
			</p>

			<div className='flex flex-col gap-2'>
				<span className='font-extrabold'>Technologies:</span>
				<ul className='flex flex-wrap gap-2'>
					{technologies.map((tech: string, index: number) => (
						<li
							key={index}
							className='px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-sm font-medium shadow-sm'>
							{tech}
						</li>
					))}
				</ul>
			</div>
			<div className='flex gap-4 pt-2'>
				<a
					href={demo}
					target='_blank'
					rel='noopener noreferrer'
					className='p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors'>
					<LinkIcon className='w-6 h-6 text-neutral-800' />
				</a>

				<a
					href={github}
					target='_blank'
					rel='noopener noreferrer'
					className='p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors'>
					<GitHubIcon className='w-6 h-6 text-neutral-800' />
				</a>
			</div>
		</motion.article>
	);
}
