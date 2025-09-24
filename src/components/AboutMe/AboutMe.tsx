import girl from "../../assets/girl.svg";
import { useCursorHover } from "../../hooks/useCursorHover";
import { motion } from "motion/react";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section
      className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
      id="about"
    >
      <div className="flex-center lg:w-1/2">
        <img src={girl} alt="girl illustration" />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-primary-white mb-10 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">About</span>{" "}
          <span className="font-extrabold">Me</span>
        </h3>
        <article
          className="flex flex-col gap-4 text-zinc-300"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            I am a highly motivated and detail-oriented Entry-Level Front-End
            Developer with a strong passion for building modern and responsive
            web applications. My foundation is built on core technologies like
            HTML, CSS, JavaScript (ES6+), and React. Through a series of
            hands-on projects, I have developed a solid understanding of
            component-based architecture, seamless API integration, and creating
            user-friendly interfaces. My eagerness to contribute to a
            collaborative team and grow within a dynamic development environment
            drives me to consistently expand my skill set.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            My technical expertise is complemented by practical experience with
            tools and libraries essential for modern development. I am
            proficient in state management with Redux Toolkit, testing with Jest
            and React Testing Library, and version control using Git and GitHub.
            I am also familiar with full-stack technologies such as Node.js and
            MongoDB, which allows me to understand both the front-end and
            back-end aspects of a project. My formal training, including courses
            from Academind and the EPAM UpSkill Program, has provided me with a
            comprehensive understanding of industry best practices.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            Beyond my technical skills, I am a committed problem-solver with a
            strong analytical mindset, honed during my academic studies. I have
            applied this disciplined approach to my projects, such as QuickQuiz
            AI, a responsive application that leverages Gemini AI, and the
            Ukrify Chrome Extension, which enhances productivity for bilingual
            users. These projects demonstrate my ability to translate complex
            ideas into functional, clean, and intuitive digital products.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
