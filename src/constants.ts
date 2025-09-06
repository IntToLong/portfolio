import { ProjectType } from './types/project';

export const linksInfo = [
	{ title: 'About', path: '#about' },
	{ title: 'Skills', path: '#skills' },
	{ title: 'Projects', path: '#projects' },
	{ title: 'Contact', path: '#contact' },
];



export const projectsData: ProjectType[] = [
	{
		imgSrc: 'src/assets/ukrify.png',
		imgAlt: '',
		number: 1,
		title: 'Ukrify - Chrome Extension',
		description:
			'Ukrify - a lightweight Chrome extension that instantly converts text typed in the wrong keyboard layout (English → Ukrainian) without needing to delete or retype.',
		path: 'https://chromewebstore.google.com/detail/ukrify/fbfgapejodfnnmfijbhkgjakcmbfbcpo',
		technologies: [
			'Vanilla JavaScript',
			'DOM',
			'Chrome Extension API',
			'Clipboard API',
		],
	},
	{
		imgSrc: 'src/assets/quickquiz1.png',
		imgAlt: '',
		number: 2,
		title: 'QuickQuiz - AI-generated quizzes',
		description:
			"QuickQuiz AI is a quiz application that leverages Google's Gemini AI to generate personalised quizzes based on topic, difficulty, and question count. Designed with an intuitive UI and real-time feedback, it helps users learn through instant explanations and performance breakdowns. ",
		path: 'https://quick-quiz-delta.vercel.app/',
		technologies: [
			'Next.js',
			'Google Gemini API',
			'CSS Modules',
			'Redux',
			'Jest',
		],
	},
	{
		imgSrc: 'src/assets/resumeLight.png',
		imgAlt: '',
		number: 3,
		title: 'Resume - interactive online resume',
		description:
			'This project is an interactive online resume featuring a modern, responsive design with a dynamic canvas background. It includes a dark mode toggle for comfortable viewing, is optimized for printing, and allows downloading a PDF version. Users can quickly access my LinkedIn and GitHub profiles. The project is built using HTML5 for semantic structure, Tailwind CSS for responsive styling, TypeScript for interactivity, and Vite for fast development and bundling.',
		path: 'https://inttolong.github.io/Resume/',
		technologies: ['HTML5', 'Tailwind CSS', 'TypeScript', 'Vite'],
	},
	{
		imgSrc: 'src/assets/portfolio.png',
		imgAlt: '',
		number: 4,
		title: 'Portfolio - recursion',
		description:
			'This project is an interactive online resume featuring a modern, responsive design with a dynamic canvas background. It includes a dark mode toggle for comfortable viewing, is optimized for printing, and allows downloading a PDF version. Users can quickly access my LinkedIn and GitHub profiles. The project is built using HTML5 for semantic structure, Tailwind CSS for responsive styling, TypeScript for interactivity, and Vite for fast development and bundling.',
		path: '/',
		technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
	},
];