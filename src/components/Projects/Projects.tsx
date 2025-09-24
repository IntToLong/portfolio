import { projectsData } from "../../constants";
import Project from "./Project";

export default function Projects() {
  return (
    <section
      className="bg-primary-white px-4 py-5 sm:px-6 sm:py-10 md:px-15 md:py-20 xl:px-28"
      id="projects"
    >
      <h2 className="mb-10 pt-5 text-center text-[28px]/[114%] tracking-tight md:pt-0 lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Projects</span>
      </h2>
      <div className="grid gap-3 md:gap-10 lg:grid-cols-2 lg:gap-15 xl:gap-30">
        {projectsData.map((project) => {
          return <Project key={project.number} project={project} />;
        })}
      </div>
    </section>
  );
}
