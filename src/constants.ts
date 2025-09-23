import { ProjectType } from "./types/project";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const linksInfo = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" }
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: "src/assets/ukrify.png",
    imgAlt: "Ukrify extension banner",
    number: 1,
    title: "Ukrify - Chrome Extension",
    description:
      "This project a lightweight Chrome extension that instantly converts text typed in the wrong keyboard layout (English → Ukrainian) without needing to delete or retype. It eliminates the need to delete and retype text by allowing users to simply highlight the text and click to convert it. The extension is designed to be simple, fast, and hassle-free, with features that let you either copy the corrected text to the clipboard or replace it in place.",
    demo: "https://chromewebstore.google.com/detail/ukrify/fbfgapejodfnnmfijbhkgjakcmbfbcpo",
    github: "https://github.com/IntToLong/UKRIFY",
    technologies: [
      "Vanilla JavaScript",
      "DOM",
      "Chrome Extension API",
      "Clipboard API"
    ],
    ariaLabel: {
      demo: "View QuickQuiz live demo",
      github: "View QuickQuiz project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/quickquiz1.png",
    imgAlt: "QuickQuiz website screenshot",
    number: 2,
    title: "QuickQuiz - AI-generated quizzes",
    description:
      "This project is a quiz application that uses Google's Gemini AI to create personalized quizzes based on topic, difficulty, and question count. It provides a seamless learning experience through an intuitive user interface, offering real-time feedback. The app features AI-generated quizzes with adjustable complexity, clear distinctions between correct and incorrect answers, and a responsive design with strong test coverage.",
    demo: "https://quick-quiz-delta.vercel.app/",
    github: "https://github.com/IntToLong/QuickQuiz",
    technologies: [
      "Next.js",
      "Google Gemini API",
      "CSS Modules",
      "Redux",
      "Jest"
    ],
    ariaLabel: {
      demo: "View QuickQuiz live demo",
      github: "View QuickQuiz project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/resumeLight.png",
    imgAlt: "Resume website screenshot",
    number: 3,
    title: "Resume - interactive online resume",
    description:
      "This project is a personal interactive online resume with a modern, responsive design and a dynamic canvas background. It is a visually engaging and functional portfolio that provides quick access to my LinkedIn and GitHub profiles. The resume includes features like a dark mode toggle for comfortable viewing, is optimized for printing, and allows users to download a PDF version for offline use.",
    demo: "https://inttolong.github.io/Resume/",
    github: "https://github.com/IntToLong/Resume",
    technologies: ["HTML5", "Tailwind CSS", "TypeScript", "Vite"],
    ariaLabel: {
      demo: "View Resume live demo",
      github: "View Resume project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/portfolio.png",
    imgAlt: "Portfolio website screenshot",
    number: 4,
    title: "Portfolio - recursion",
    description:
      "This project is an online portfolio that serves as a professional hub for showcasing my work. It features a dedicated projects block, which provides detailed descriptions of my various projects and professional accomplishments. This site, a project in itself, embodies the principle of recursion by acting as both a platform for my work and a tangible example of my web development capabilities.",
    demo: "/",
    github: "https://github.com/IntToLong/portfolio",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    ariaLabel: {
      demo: "View Portfolio live demo",
      github: "View Portfolio project source code on GitHub"
    }
  }
];
