import MetaTags from "@components/MetaTags";
import Heading from "../../components/Heading";
import { projects } from "@data/projects";
import { useRouter } from "next/router";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faChartLine, faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "@components/Slide";
import { motion } from "framer-motion";
import { item, list, slideUp } from "@helpers/animation";
import NotFound from "pages/404";

const ProjectDetails = () => {
  const router = useRouter();

  const { id } = router.query;

  const project = projects.find((project) => project.id === id);

  return (
    <>
      {!project && <NotFound />}
      <MetaTags title={project ? `${project.name} | Portfolio` : "Project Details"} />
      {project && (
        <section className="min-h-screen py-32 flex items-center overflow-hidden dark:bg-dark-theme">
          <div className="max-w-screen-lg mx-auto w-full px-2">
            <div className="lg:flex lg:justify-center lg:space-x-12 mb-12 mt-8">
              <Heading heading={project?.name} stroke/>

              <motion.div initial="hidden" animate="visible" variants={list} className="mt-20">
                <motion.h4
                  variants={item}
                  className="mb-2 text-xl text-gray-900 dark:text-gray-300  font-main font-semibold"
                >
                  Tools:
                </motion.h4>
                <motion.div variants={item} className="mb-6 flex flex-wrap gap-2">
                  {project?.tools.map((tool, index) => (
                    <span
                      key={`${tool}-${index}`}
                      className="
                        px-3 
                        py-1 
                        rounded-full 
                        bg-gray-200 
                        dark:bg-gray-700 
                        text-gray-800 
                        dark:text-gray-100 
                        text-sm 
                        font-main 
                        font-medium 
                        hover:bg-primary/20 
                        transition-colors
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex justify-between font-main dark:text-gray-200 font-bold lg:w-full md:w-96 w-full "
                >
                  { 
                    project?.linkToPage && 
                    <a
                      href={project?.linkToPage}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mr-4 hover:text-primary flex items-center space-x-2"
                    >
                      <span>Visit App</span>
                      <FontAwesomeIcon className="w-4" icon={faExternalLinkAlt} />
                    </a>
                  }
                  { 
                    project?.linkToSrc && 
                    <a
                      href={project?.linkToSrc}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mr-4 hover:text-primary flex  items-center  space-x-2"
                    >
                      <span>Source</span>
                      <FontAwesomeIcon className="w-4" icon={faGithub} />
                    </a>
                  }
                  { 
                    project?.linkToSlide && 
                    <a
                      href={project?.linkToSlide}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mr-4 hover:text-primary flex  items-center  space-x-2"
                    >
                      <span>Slides</span>
                      <FontAwesomeIcon className="w-4" icon={faFilePowerpoint} />
                    </a>
                  }
                  { 
                    project?.linkToDashboard && 
                    <a
                      href={project?.linkToDashboard}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mr-4 hover:text-primary flex  items-center  space-x-2"
                    >
                      <span>Dashboard</span>
                      <FontAwesomeIcon className="w-4" icon={faChartLine} />
                    </a>
                  }
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
              className="max-w-screen-md px-2 mx-auto"
            >
              <Slide>
                {project?.imgs?.map((img, index) => (
                  <div key={`img-${index}`}>
                    <img src={img} alt="project_img" />
                  </div>
                ))}
              </Slide>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={list}>
              <motion.div
                variants={item}
                className="mb-6 text-lg text-gray-700 dark:text-gray-200 font-main font-medium prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: project?.description || "" }}
              />
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectDetails;
