import CssIcon from '../../assets/skills/css.svg?react';
import GitIcon from '../../assets/skills/git.svg?react';
import HtmlIcon from '../../assets/skills/html.svg?react';
import JavaScriptIcon from '../../assets/skills/javascript.svg?react';
import JestIcon from '../../assets/skills/jest.svg?react';
import NextJsIcon from '../../assets/skills/nextjs.svg?react';
import ReactIcon from '../../assets/skills/react.svg?react';
import ReactRouterIcon from '../../assets/skills/reactrouter.svg?react';
import ReduxIcon from '../../assets/skills/redux.svg?react';
import TailwindCssIcon from '../../assets/skills/tailwindcss.svg?react';
import TypeScriptIcon from '../../assets/skills/typescript.svg?react';
import SkillCard from './SkillCard';

export default function Skills() {
	return (
		<section className='my-20 px-4 sm:px-6 md:px-20 lg:px-28'>
			<h2 className='text-center text-[28px]/[114%] lg:text-[48px]/[114%] tracking-tight mb-10'>
				<span className='pr-4'>My</span>
				<span className='font-extrabold'>Skills</span>
			</h2>
			<div className='flex justify-evenly flex-wrap gap-5 md:gap-5 lg:gap-12'>
				<SkillCard title='HTML5'>
					<HtmlIcon className='group-hover:fill-primary-white' />
				</SkillCard>
				<SkillCard title='CSS3'>
					<CssIcon className='group-hover:fill-primary-white' />
				</SkillCard>
				<SkillCard title='JavaScript'>
					<JavaScriptIcon className='group-hover:fill-primary-white' />
				</SkillCard>
				<SkillCard title='TypeScript'>
					<TypeScriptIcon className='group-hover:fill-primary-white' />
				</SkillCard>
				<SkillCard title='React'>
					<ReactIcon className='group-hover:fill-primary-white' />
				</SkillCard>
				<SkillCard title='Redux'>
					<ReduxIcon className='group-hover:fill-primary-white' />
				</SkillCard>
				{/* <SkillCard title='Router'>
					<ReactRouterIcon className='group-hover:fill-primary-white' />
				</SkillCard> */}

				<SkillCard title='Next JS'>
					<NextJsIcon className='group-hover:fill-primary-white' />
				</SkillCard>
				<SkillCard title='Tailwind'>
					<TailwindCssIcon className='group-hover:fill-primary-white group-hover:stroke-primary-white' />
				</SkillCard>
				<SkillCard title='Jest'>
					<JestIcon className='group-hover:fill-primary-white' />
				</SkillCard>
				<SkillCard title='GIT'>
					<GitIcon className='group-hover:fill-primary-white' />
				</SkillCard>
			</div>
		</section>
	);
}
