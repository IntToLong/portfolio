import Form from './Form';
import EmailIcon from '../../assets/email.svg?react';

export default function Contact() {
	return (
		<>
			<section className='bg-primary-black text-primary-black h-20 md:h-25'></section>
			<section
				id='contact'
				className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 md:my-20 my-10'>
				<h2 className='text-[28px]/[114%] lg:text-5xl/[117%] tracking-tight mb-10 text-primary-black text-center'>
					<span className='pr-4'>Contact</span>{' '}
					<span className='font-extrabold'>Me</span>
				</h2>
				<div className='md:flex md:flex-row-reverse md:gap-15 xl:gap-28 md:items-center'>
					<div className='flex flex-col gap-8 my-8 w-full'>
						<h2 className='font-extrabold text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]'>
							Let`s
							<span className='text-stroke-1 text-stroke-primary-black text-primary-white px-3'>
								talk
							</span>
							for
							<br /> Something special
						</h2>
						<p className='text-base/[150%] text-zinc-500'>
							I`m currently looking for new opportunities, my inbox always open.
							Whether you have a question or just want to say hi, I`ll try my
							best to get back to you!
						</p>
						<p className='flex items-center hover:pl-3 transition-all duration-300'>
							<EmailIcon className='w-5 h-5 mr-3' />
							<a href='mailto:liubynets.nataliia@gmail.com'>
								liubynets.nataliia@gmail.com
							</a>
						</p>
					</div>
					<Form />
				</div>
			</section>
		</>
	);
}
