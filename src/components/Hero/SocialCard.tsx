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
			className='inline-block group border-2 rounded p-4 bg-primary-white cursor-pointer hover:bg-primary-black transition-all duration-300 hover:scale-105'
			target='_blank'
			rel='noopener noreferrer'>
			{children}
		</a>
	);
}
