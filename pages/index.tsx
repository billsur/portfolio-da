import styles from "@styles/Home.module.css";
import { motion } from "framer-motion";
import {
  slideUp,
  slideToRight,
  slideToLeft,
  slideDown,
  fadeIn,
} from "@helpers/animation";
import Link from "next/link";
import MetaTags from "@components/MetaTags";
import Shape from "@components/Shape";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
// import Contact from "./contact";
// import About from "./about";
// import Work from "./work";

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Data Analyst", "Front-End Engineer"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1800,
        loop: true,
        showCursor: true,
        cursorChar: "_",
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <MetaTags title="Billy Surya | Data Analyst" />
      <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-16 dark:bg-dark-theme">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.6}
          className="absolute z-20 bottom-0 px-2 xl:hidden font-main uppercase font-black text-gray-300 dark:text-dark-gray md:text-7xl text-5xl"
        >
          data analyst
        </motion.h1>

        <div className="relative max-w-screen-lg px-2 w-full mx-auto">
          <div className="xl:gap-0 gap-4 flex flex-col items-center">
            <div className="md:space-x-16 justify-center items-center md:flex">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideDown}
                className="h-0.5 w-52 my-6 bg-gray-300 dark:bg-gray-300"
              ></motion.div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideToRight}
                custom={0.3}
                className="md:text-2xl text-lg dark:text-gray-300 text-gray-700 font-lora capitalize"
              >
                Hello, I'm <b>Billy Surya</b>.
              </motion.p>
                <motion.div
                initial="hidden"
                animate="visible"
                variants={slideDown}
                className="h-0.5 w-52 my-6 bg-gray-300 dark:bg-gray-300"
              ></motion.div>
            </div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="md:text-7xl text-4xl md:leading-normal dark:text-gray-100 font-black font-main text-black uppercase flex items-center"
            >
              <span ref={typedRef}></span>
            </motion.h1>

            <div className="md:space-x-16 justify-center items-center md:flex">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideDown}
                className="h-0.5 w-52 my-6 bg-gray-300 dark:bg-gray-300"
              ></motion.div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideToRight}
                custom={0.3}
                className="md:text-2xl text-lg dark:text-gray-300 text-gray-700 font-lora"
              >
                Based in Jakarta.
              </motion.p>
                <motion.div
                initial="hidden"
                animate="visible"
                variants={slideDown}
                className="h-0.5 w-52 my-6 bg-gray-300 dark:bg-gray-300"
              ></motion.div>
            </div>

            <Link href="/about">
              <motion.button
                initial="hidden"
                animate="visible"
                variants={slideUp}
                whileTap={{ scale: 0.9 }}
                custom={0.6}
                className={`${styles.btn} focus:outline-none mt-8 relative px-6 py-2 font-semibold text-md font-main capitalize rounded bg-primary dark:bg-primary-dark`}
              >
                <a>About Me</a>
              </motion.button>
            </Link>

            <div className="mt-8">
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1byQJbvR0ozuMAhtfw1PXPRoGlOf_LugI"
                download
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                animate="visible"
                variants={slideUp}
                whileTap={{ scale: 0.9 }}
                custom={0.8}
                className={`${styles.btn} mt-4 md:mt-0 focus:outline-none relative px-6 py-2 font-semibold text-md font-main capitalize rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-white`}
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={0.6}
          className="absolute -bottom-10 xl:left-12 right-0 w-20 bg-cover h-20 dark:filter dark:invert"
        >
          <Shape />
        </motion.div>
      </section>
      {/* <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-16 dark:bg-dark-theme">
        <div className="max-w-screen-lg px-2 w-full mx-auto">
          <About/>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={0.6}
          className="absolute -bottom-10 xl:left-12 right-0 w-20 bg-cover h-20 dark:filter dark:invert"
        >
          <Shape />
        </motion.div>
      </section>
      <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-16 dark:bg-dark-theme">
        <div className="max-w-screen-lg px-2 w-full mx-auto">
          <Work/>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={0.6}
          className="absolute -bottom-10 xl:left-12 right-0 w-20 bg-cover h-20 dark:filter dark:invert"
        >
          <Shape />
        </motion.div>
      </section>
      <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-16 dark:bg-dark-theme">
        <div className="max-w-screen-lg px-2 w-full mx-auto">
          <Contact/>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={0.6}
          className="absolute -bottom-10 xl:left-12 right-0 w-20 bg-cover h-20 dark:filter dark:invert"
        >
          <Shape />
        </motion.div>
      </section> */}
    </>
  );
};

export default Home;
