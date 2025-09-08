import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialCard from '../Hero/SocialCard';
import Input from './Input';
import FacebookIcon from '../../assets/social/facebook.svg?react';
import LinkedinIcon from '../../assets/social/linkedin.svg?react';
import DiscordIcon from '../../assets/social/discord.svg?react';
import GitHubIcon from '../../assets/social/github.svg?react';
import PlaneIcon from '../../assets/paperPlane.svg?react';
import { useCursorHover } from '../../hooks/useCursorHover';
import Modal from '../UI/Modal';

export default function Form() {
	const [clicked, setClicked] = useState(false);
	const form = useRef<HTMLFormElement>(null)!;
	const { handleMouseEnter, handleMouseLeave } = useCursorHover();

	const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					import.meta.env.VITE_SERVICE_ID,
					import.meta.env.VITE_TEMPLATE_ID,
					form.current,
					{
						publicKey: import.meta.env.VITE_PUBLIC_KEY,
					}
				)
				.then(
					() => {
						console.log('SUCCESS!');
					},
					(error) => {
						console.log('FAILED...', error.text);
					}
				);
		}
	};

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className='flex flex-col gap-5 w-full'>
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
			<div className='flex flex-col md:flex-row justify-between gap-5'>
				<button
					type='submit'
					onClick={() => setClicked(true)}
					className='group px-4 py-3 rounded md:border-2 text-primary-white font-semibold bg-primary-black w-[153px] xl:w-44 h-14 gap-2 hover:bg-primary-neutral active:text-primary-black active:bg-primary-white active:shadow-bottom flex-center cursor-pointer relative'>
					Get In Touch
					<PlaneIcon
						className={`fill-primary-black absolute right-0 top-0 transition-all duration-300 opacity-0 ${
							clicked ? ':animate-fly ease-linear' : ''
						}`}
					/>
				</button>
				<div className='flex md:justify-evenly gap-3 md:gap-5'>
					<SocialCard path='https://www.linkedin.com/in/nataliia-luibynets/'>
						<LinkedinIcon className='group-hover:fill-primary-white w-5 h-5 ' />
					</SocialCard>
					<SocialCard path='https://inttolong.github.io/Resume/'>
						<FacebookIcon className='group-hover:fill-primary-white w-5 h-5 ' />
					</SocialCard>
					<SocialCard path='https://github.com/IntToLong/'>
						<GitHubIcon className='group-hover:fill-primary-white w-5 h-5 ' />
					</SocialCard>
					<SocialCard path='https://discord.com/users/831960537923453008'>
						<DiscordIcon className='group-hover:fill-primary-white w-5 h-5 ' />
					</SocialCard>
				</div>
			</div>
			{/* <Modal open={clicked}>Message is sent!</Modal> */}
		</form>
	);
}
