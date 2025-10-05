import MetaTags from "@components/MetaTags";
import {
  item,
  list,
  slideDown,
  slideToLeft,
  slideUp,
} from "@helpers/animation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faHtml5,
  faReact,
  faJira,
  faGoogle,
  faGitAlt,
  faVuejs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faChartBar,
  faTags,
} from "@fortawesome/free-solid-svg-icons";



const About = () => {
  const data = {
    technical_tools: {
      "programming languages": [
        { name: "Python", icon: faPython },
        { name: "SQL", icon: faDatabase },
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 }
      ],
      frameworks: [
        { name: "React", icon: faReact },
        { name: "Vue", icon: faVuejs },
      ],
      visualization: [
        { name: "Tableau", icon: faChartBar },
      ],
      utilities: [
        { name: "Google Tag Manager", icon: faTags },
        { name: "JIRA", icon: faJira },
        { name: "Google Colab", icon: faGoogle },
        { name: "Git", icon: faGitAlt },
        { name: "Figma", icon: faFigma }
      ]
    }
  };


  return (
    <>
      <MetaTags title="About Me" />
      <section className="min-h-screen flex items-center pt-28 overflow-hidden dark:bg-dark-theme">
        <div className="max-w-screen-lg mx-auto xl:flex xl:justify-between xl:space-x-10 px-2">
          <div className="flex lg:flex-col justify-between lg:justify-start">
            {/* <div className="mr-6 mb-0 lg:mr-0 lg:mb-6">
              <img
                src='/perfume.jpg'
                width={345}
                height={216}
                className="rounded"
                alt="profile-image"
              />
            </div> */}
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
             a motivated and results-driven Data Analyst with a unique background as a Front End Engineer. 
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
            {/* <motion.ul
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
            </motion.ul> */}
            <div>
              {Object.entries(data.technical_tools).map(([category, items], idx) => (
                <div key={category} className="mb-8">
                  <motion.h4
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                    custom={idx * 0.3}
                    className="text-xl font-main font-bold capitalize mb-4 dark:text-gray-100"
                  >
                    {category}
                  </motion.h4>

                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={list}
                    className="grid md:grid-cols-3 grid-cols-2 gap-4"
                  >
                    {items.map((tool, i) => (
                      <motion.li
                        key={`${tool.name}-${i}`}
                        variants={item}
                        className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                      >
                        <FontAwesomeIcon
                          icon={tool.icon}
                          className="w-5 h-5 text-gray-800 dark:text-gray-100"
                        />
                        <span>{tool.name}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
