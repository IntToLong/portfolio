import { motion } from "motion/react";
import LinkIcon from "../../assets/link.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";
import { useCursorHover } from "../../hooks/useCursorHover";
import { ProjectType } from "../../types/project";

export default function Project({ project }: { project: ProjectType }) {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <motion.article
      initial={{ x: 75, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, type: "spring" }}
      viewport={{ once: true }}
      className="bg-primary-black text-primary-white flex flex-grow flex-col items-start gap-10 rounded-lg border-2 px-3 py-5 md:p-10 xl:p-20"
    >
      <div className="flex flex-col gap-10">
        <p className="text-primary-white text-2xl font-extrabold text-neutral-900 md:text-4xl">
          {project.number < 10 ? `0${project.number}` : project.number}
        </p>
        <h3 className="text-primary-white text-xl font-extrabold tracking-tight text-neutral-800 md:text-3xl">
          {project.title}
        </h3>
      </div>
      <p
        className="flex-grow leading-relaxed text-zinc-300"
        onMouseEnter={() => handleMouseEnter(150)}
        onMouseLeave={() => handleMouseLeave(40)}
      >
        {project.description}
      </p>

      <div className="flex flex-col gap-2">
        <span className="font-extrabold">Technologies:</span>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <li
              key={index}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 pt-2">
        <a
          href={project.demo}
          aria-label={project.ariaLabel.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
        >
          <LinkIcon className="h-6 w-6 text-neutral-800" />
        </a>

        <a
          href={project.github}
          aria-label={project.ariaLabel.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
        >
          <GitHubIcon className="h-6 w-6 text-neutral-800" />
        </a>
      </div>
    </motion.article>
  );
}
