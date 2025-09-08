import { useCursorHover } from '../../hooks/useCursorHover';

export default function Input({
	type,
	placeholder,
	name,
	required,
}: {
	type: string;
	placeholder: string;
	name: string;
	required?: boolean;
}) {
	const { handleMouseEnter, handleMouseLeave } = useCursorHover();
	return (
		<input
			type={type}
			placeholder={placeholder}
			name={name}
			required={required}
			className='w-full h-14 placeholder:text-zinc-300 text-zinc-400 text-base/[125%] tracking-tight border-2 rounded py-4 px-6 border-primary-black'
			onMouseEnter={() => handleMouseEnter(30, 'primary-black')}
			onMouseLeave={() => handleMouseLeave(30, 'primary-white')}
		/>
	);
}
