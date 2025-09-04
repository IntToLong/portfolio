//import { socialPaths } from '../../constants';
import SocialCard from './SocialCard';
import SocialMedia from './SocialMedia';

export const socialPaths = [
	'https://www.linkedin.com/in/nataliia-luibynets/',
	'https://github.com/IntToLong/',
	'https://inttolong.github.io/Resume/',
	'#contact',
];

export default function Hero() {
	return (
		<div>
			<section>
				<h2>
					Hello, I`am <span>Flora Sheen.</span>{' '}
				</h2>
				<p>
					<span>Frontend </span>
					<span>Developer</span>
				</p>
				<p>
					<span>Based In </span>
					<span>Poland.</span>
				</p>
			</section>
			<SocialMedia />
		</div>
	);
}
