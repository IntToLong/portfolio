import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from './Input';
import { useCursorHover } from '../../hooks/useCursorHover';
import Modal from '../UI/Modal';
import CheckIcon from '../../assets/check.svg?react';
import ErrorIcon from '../../assets/error.svg?react';
import FormActions from './FormActions';

export default function Form() {
	const [isSent, setIsSent] = useState('');
	const [clicked, setClicked] = useState(false);
	const form = useRef<HTMLFormElement>(null)!;
	const { handleMouseEnter, handleMouseLeave } = useCursorHover();

	const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setClicked(true);

		// if (form.current) {
		// 	emailjs
		// 		.sendForm(
		// 			import.meta.env.VITE_SERVICE_ID,
		// 			import.meta.env.VITE_TEMPLATE_ID,
		// 			form.current,
		// 			{
		// 				publicKey: import.meta.env.VITE_PUBLIC_KEY,
		// 			}
		// 		)
		// 		.then(() => {
		// 			setIsSent('success');
		// 		})
		// 		.catch((error) => {
		// 			setIsSent('error');
		// 			console.log('FAILED...', error.text);
		// 		})
		// 		.finally(() => setClicked(false));
		// }
	};

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className='flex flex-col gap-5 w-full relative'>
			<Input
				type='text'
				placeholder='Name'
				name='name'
			/>
			<Input
				type='email'
				placeholder='Email'
				name='email'
				required
			/>
			<Input
				type='text'
				placeholder='Subject'
				name='title'
			/>
			<textarea
				className='w-full placeholder:text-zinc-300 text-zinc-400 text-base/[125%] tracking-tight rounded py-4 px-6 border-2 border-primary-black'
				id='description'
				name='message'
				placeholder='Write your message'
				rows={5}
				required
				onMouseEnter={() => handleMouseEnter(30, 'primary-black')}
				onMouseLeave={() => handleMouseLeave(30, 'primary-white')}></textarea>
			<FormActions
				clicked={clicked}
				sendEmail={sendEmail}
			/>
			<Modal
				open={isSent}
				onClose={() => setIsSent('')}>
				{isSent === 'success' && (
					<>
						<div className='flex-center w-full'>
							<CheckIcon className='w-20 h-20' />
						</div>
						<p>Your message is sent!</p>
					</>
				)}
				{isSent === 'error' && (
					<>
						<div className='flex-center w-full'>
							<ErrorIcon className='w-20 h-20' />
						</div>
						<p>Oops! Something went wrong. Please try again.</p>
					</>
				)}
			</Modal>
		</form>
	);
}
