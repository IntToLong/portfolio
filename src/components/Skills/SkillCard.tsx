import { ReactNode } from 'react';

export default function SkillCard({
	title,
	children,
}: {
	title: string;
	children: ReactNode | undefined;
}) {
	return (
		<div className='group w-40 h-40 sm:w-[186px] sm:h-[186px] p-6 sm:p-10  border-2 rounded bg-primary-white flex flex-col justify-center items-center hover:bg-primary-black'>
			{children}
			<h3 className='text-xl/[120%] font-bold tracking-tight mt-5 group-hover:text-primary-white'>{title}</h3>
		</div>
	);
}
