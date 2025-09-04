import { ReactNode } from 'react';

export default function SocialCard({
	path,
	children,
}: {
	path: string;
	children?: ReactNode | undefined;
}) {
	return (
		<a
			href={path}
			className='w-12 h-12 md:w-auto md:h-auto flex-center group border-2 rounded p-1 md:p-4 bg-primary-white cursor-pointer hover:bg-primary-black transition-all duration-300 hover:scale-105 active:scale-90'
			target='_blank'
			rel='noopener noreferrer'>
			{children}
		</a>
	);
}
