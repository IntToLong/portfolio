import { HTMLAttributes } from 'react';
import LinkIcon from '../../assets/link.svg?react';
import { ProjectType } from '../../types/project';

type ProjectProps = ProjectType & {
	styles: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Project({
	imgSrc,
	imgAlt,
	number,
	title,
	description,
	path,
	technologies,
	styles,
	...props
}: ProjectProps) {
	const defaultStyles =
		'flex flex-col gap-7 mb-7 md:gap-10 lg:gap-20 my-10 md:my-20';
	let currentStyles = styles
		? defaultStyles + ' ' + styles
		: defaultStyles + ' ' + 'md:flex-row';
	
	return (
		<article
			{...props}
			className={currentStyles}>
			<div className='w-full h-[400px] md:h-[500px] md:w-1/2 overflow-hidden rounded-[19px] md:shadow-custom hover:scale-105 transition-all duration-300 ease-in'>
				<a
					href={path}
					target='_blank'
					rel='noopener noreferrer'>
					<img
						className='object-cover object-left w-full block grayscale hover:grayscale-0 rounded-[19px] md:object-top md:object-cover h-full '
						src={imgSrc}
						alt={imgAlt}
					/>
				</a>
			</div>
			<div className='flex flex-col gap-7 md:w-1/2'>
				<h2 className='font-extrabold text-2xl/[117%] md:text-5xl/[117%] tracking-tight'>
					{number < 10 ? `0${number}` : number}
				</h2>
				<h3 className='font-extrabold text-xl/[117%] tracking-tight md:text-[32px]/[117%]'>
					{title}
				</h3>
				<p>{description}</p>
				<div>
					<span className='font-extrabold'>Technologies:</span>
					<ul className='list-none flex gap-5'>
						{technologies.map((tech: string, index: number) => {
							return <li key={index}>{tech}</li>;
						})}
					</ul>
				</div>
				<a
					href={path}
					target='_blank'
					rel='noopener noreferrer'>
					<LinkIcon />
				</a>
			</div>
		</article>
	);
}
