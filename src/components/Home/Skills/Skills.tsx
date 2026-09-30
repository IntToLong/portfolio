import CssIcon from "@app/assets/skills/css.svg?react";
import GitIcon from "@app/assets/skills/git.svg?react";
import HtmlIcon from "@app/assets/skills/html.svg?react";
import JavaScriptIcon from "@app/assets/skills/javascript.svg?react";
import JestIcon from "@app/assets/skills/jest.svg?react";
import NextJsIcon from "@app/assets/skills/nextjs.svg?react";
import ReactIcon from "@app/assets/skills/react.svg?react";
import ReduxIcon from "@app/assets/skills/redux.svg?react";
import TailwindCssIcon from "@app/assets/skills/tailwindcss.svg?react";
import TypeScriptIcon from "@app/assets/skills/typescript.svg?react";
import SkillCard from "./SkillCard";

const defaultStyles = "group-hover:fill-primary-white";

const skills = [
  {
    title: "HTML5",
    icon: HtmlIcon,
    className: defaultStyles
  },
  {
    title: "CSS3",
    icon: CssIcon,
    className: defaultStyles
  },
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
    className: defaultStyles
  },
  {
    title: "TypeScript",
    icon: TypeScriptIcon,
    className: defaultStyles
  },
  {
    title: "React",
    icon: ReactIcon,
    className: defaultStyles
  },
  {
    title: "Redux",
    icon: ReduxIcon,
    className: defaultStyles
  },
  {
    title: "Next JS",
    icon: NextJsIcon,
    className: defaultStyles
  },
  {
    title: "Tailwind",
    icon: TailwindCssIcon,
    className: `${defaultStyles} group-hover:stroke-primary-white`
  },
  {
    title: "Jest",
    icon: JestIcon,
    className: defaultStyles
  },
  {
    title: "GIT",
    icon: GitIcon,
    className: defaultStyles
  }
];

export default function Skills() {
  return (
    <section
      className="bg-primary-white px-4 py-10 sm:px-6 md:px-20 lg:px-28 lg:pb-25 2xl:px-36"
      id="skills"
    >
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Skills</span>
      </h2>
      <ul className="grid grid-cols-2 justify-items-center gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-12 xl:grid-cols-5">
        {skills.map(({ title, icon: Icon, className }) => (
          <SkillCard key={title} title={title}>
            <Icon className={className} />
          </SkillCard>
        ))}
      </ul>
    </section>
  );
}
