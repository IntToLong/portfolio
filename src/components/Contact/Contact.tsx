import Form from "./Form";
import EmailIcon from "../../assets/email.svg?react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <>
      <section className="bg-primary-black text-primary-black h-20 md:h-25"></section>
      <section
        id="contact"
        className="bg-primary-white relative px-4 py-10 sm:px-6 md:px-10 md:py-20 lg:px-20 xl:px-28"
      >
        <h2 className="text-primary-black mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">Contact</span>{" "}
          <span className="font-extrabold">Me</span>
        </h2>
        <div className="md:flex-row-reverse md:items-center md:gap-15 lg:flex xl:gap-28">
          <div className="my-8 flex w-full flex-col gap-8">
            <motion.h2
              className="text-[28px]/[114%] font-extrabold tracking-tight lg:text-5xl/[117%]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              Let`s
              <span className="text-stroke-1 text-stroke-primary-black text-primary-white px-3">
                talk
              </span>
              for
              <br /> Something special
            </motion.h2>
            <p className="text-base/[150%] text-zinc-500">
              I`m currently looking for new opportunities, my inbox always open.
              Whether you have a question or just want to say hi, I`ll try my
              best to get back to you!
            </p>
            <p className="flex items-center transition-all duration-300 hover:pl-3">
              <EmailIcon className="mr-3 h-5 w-5" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=liubynets.nataliia@gmail.com&su=Connect%20Request&body=Hi%2C%20Nataliia%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                liubynets.nataliia@gmail.com
              </a>
            </p>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
