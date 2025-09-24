import SocialMedia from "./SocialMedia";
import girl from "../../assets/girlWithLaptop.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex-center bg-primary-white flex-col-reverse justify-evenly px-4 sm:px-6 md:flex-row md:px-20 md:pt-10 lg:px-28">
      <motion.section
        className="flex flex-col gap-8 md:w-1/2"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-3 text-[28px]/[114%] tracking-tight lg:gap-5 lg:text-5xl/[117%]">
          <h1>
            <span>Hello, I`am</span>{" "}
            <TypeAnimation
              sequence={["Junior", 3000, "", 1000, "Nataliia", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontWeight: 800, display: "inline-block" }}
              repeat={0}
              preRenderFirstString={true}
            />
          </h1>
          <p>
            <span className="font-extrabold">Frontend </span>
            <span className="text-primary-white text-stroke-1 text-stroke-primary-black font-extrabold">
              Developer
            </span>
          </p>
          <p>
            <span>Based In </span>
            <span className="font-extrabold">Poland.</span>
          </p>
        </div>
        <p className="text-base/6 font-normal text-zinc-500">
          I am a passionate and highly motivated technology enthusiast with a
          strong focus on building innovative solutions and continuously
          expanding my skills. My goal is to grow as a developer and contribute
          to meaningful projects within the dynamic and ever-evolving tech
          industry, applying my skills to solve real-world problems.
        </p>
        <div className="lg:mt-10">
          <SocialMedia />
        </div>
      </motion.section>

      <motion.div
        className="flex-center md:w-1/2"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <img
          src={girl}
          alt="girl with laptop"
          fetchPriority="high"
          className="max-h-[750px] pb-8 sm:w-[539px] xl:w-630"
        />
      </motion.div>
    </div>
  );
}
