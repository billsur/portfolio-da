import MetaTags from "@components/MetaTags";
import {
  item,
  list,
  slideDown,
  slideToLeft,
  slideUp,
} from "@helpers/animation";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Html/CSS",
    "Javascript",
    "Typescript",
    "React.js",
    "Vue.Js",
    "JQuery",
    "Nuxt.js",
    "Lit",
    "Stencil.js",
    "Vuex",
    "Pinia",
    "SCSS",
    "Tailwindcss",
    "Bootstrap",
    "Vuetify",
    "Jest",
    "Vitest",
    "RESTful API",
    "Axios",
    "Ajax",
    "Figma",
    "Zeplin",
    "JIRA",
    "Microsoft Azure",
    "Bitbucket",
    "Git/Gitlab"
  ];
  return (
    <>
      <MetaTags title="About Me" />
      <section className="min-h-screen flex items-center pt-28 overflow-hidden dark:bg-dark-theme">
        <div className="max-w-screen-lg mx-auto xl:flex xl:justify-between xl:space-x-10 px-2">
          <div className="flex lg:flex-col justify-between lg:justify-start">
            <div className="mr-6 mb-0 lg:mr-0 lg:mb-6">
              <img
                src='/perfume.jpg'
                width={345}
                height={216}
                className="rounded"
                alt="profile-image"
              />
            </div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideDown}
              className="sm:text-7xl text-5xl font-main dark:text-gray-100 font-black uppercase mb-12 xl:mb-0"
            >
              About <br />
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative inline-block w-32  mr-4 h-4 bg-gray-200 dark:bg-dark-gray"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-full w-16 h-4 bg-primary dark:bg-primary-dark"
                ></motion.span>
              </motion.span>
              Me
            </motion.h1>
          </div>

          <div>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="text-main font-semibold text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6"
            >
             Hi, I'm Billy 
             A motivated and results-driven Data Analyst with a unique background as a Front End Engineer. 
             I am guided by a data-driven mindset and curiosity, specializing in transforming raw data into actionable business intelligence. 
             < br/> <br/>
             My experience in building data-intensive user interfaces and implementing robust data collection systems allows me 
             to bridge the gap between technical implementation and business strategy, 
             ensuring that every decision is built on a foundation of accurate and reliable data.
            </motion.p>
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={0.3}
              className="text-3xl font-main font-black uppercase mb-6 dark:text-gray-100"
            >
              My Skills :
            </motion.h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={list}
              className="relative z-20 grid md:grid-cols-3 grid-cols-2 max-w-screen-md gap-4 "
            >
              {skills.map((skill, i) => (
                <motion.li
                  variants={item}
                  key={`${skill}-${i}`}
                  className="text-main text-xl text-gray-700 dark:text-gray-200"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
