import SocialCard from '../Hero/SocialCard';
import FacebookIcon from '../../assets/social/facebook.svg?react';
import LinkedinIcon from '../../assets/social/linkedin.svg?react';
import DiscordIcon from '../../assets/social/discord.svg?react';
import GitHubIcon from '../../assets/social/github.svg?react';

export default function FormActions({
	sendEmail,
	clicked,
}: {
	sendEmail: () => void;
	clicked: boolean;
}) {
	return (
		<div className='flex flex-col md:flex-row justify-between gap-5'>
			<button
				type='submit'
				onClick={sendEmail}
				disabled={clicked}
				className='group px-4 py-3 rounded md:border-2 text-primary-white font-semibold bg-primary-black w-[153px] xl:w-44 h-14 gap-2 hover:bg-primary-neutral active:text-primary-black active:bg-primary-white active:shadow-bottom flex-center cursor-pointer relative disabled:text-primary-black disabled:bg-primary-white disabled:shadow-bottom'>
				{clicked ? 'Sending...' : 'Get In Touch'}
			</button>
			<div className='flex md:justify-evenly gap-3 md:gap-5'>
				<SocialCard path='https://www.linkedin.com/in/nataliia-luibynets/'>
					<LinkedinIcon className='group-hover:fill-primary-white w-5 h-5' />
				</SocialCard>
				<SocialCard path='https://inttolong.github.io/Resume/'>
					<FacebookIcon className='group-hover:fill-primary-white w-5 h-5' />
				</SocialCard>
				<SocialCard path='https://github.com/IntToLong/'>
					<GitHubIcon className='group-hover:fill-primary-white w-5 h-5' />
				</SocialCard>
				<SocialCard path='https://discord.com/users/831960537923453008'>
					<DiscordIcon className='group-hover:fill-primary-white w-5 h-5' />
				</SocialCard>
			</div>
		</div>
	);
}
