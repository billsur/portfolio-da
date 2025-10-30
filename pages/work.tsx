import { list, itemSlideUp } from "@helpers/animation";
import { motion } from "framer-motion";
import { projects } from "@data/projects";
import Heading from "@components/Heading";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import MetaTags from "@components/MetaTags";

const experiences = [
  {
    id: 1,
    role: "Front End Engineer",
    company: "Harian Kompas",
    date: "Dec 2021 – Jun 2025",
    details: [
      "Designed and analyzed A/B testing experiments for subscription funnel optimization, identifying key drop-off points that helped reduce churn rate from 13% to 3.5%.",
      "Translated experiment results into actionable business recommendations presented to stakeholders for retention improvement.",
      "Collaborated with growth and analytics teams to define key metrics and instrument data tracking using Google Tag Manager and Segment, delivering 10+ new insights for user behavior analysis."
    ]
  },
  {
    id: 2,
    role: "Front End Engineer",
    company: "Jakmall.com",
    date: "Aug 2020 – Sept 2021",
    details: [
      "Developed and implemented a tracking system using UTM parameters across 30+ marketing campaigns, improving attribution accuracy and marketing performance measurement.",
      "Built reusable data components that standardized event tracking structure across two platforms, improving analytics consistency.",
      "Partnered with marketing teams to monitor link performance data and generate actionable insights that guided campaign optimization."
    ]
  },
  {
    id: 3,
    role: "Junior Front End Engineer",
    company: "Jojonomic Pte. Ltd",
    date: "Jun 2018 – Jun 2020",
    details: [
      "Collaborated with product teams to design and maintain data-driven dashboards for web applications, ensuring consistency across multiple data sources.",
      "Contributed to sprint reviews by analyzing feature usage data, which helped the product team refine user workflows and improve adoption in subsequent releases.",
      "Integrated and standardized APIs for analytics reporting, enabling automated tracking for business intelligence purposes."
    ]
  }
];

const Work = () => {
  return (
    <>
      <MetaTags title="Work" />
      <section className="dark:bg-dark-theme relative overflow-hidden min-h-screen flex flex-col items-center py-28">
        <div className="max-w-screen-lg mx-auto w-full px-2">
          {/* Work Experience Section */}
          <Heading heading="experience" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="mt-6 space-y-10"
          >
            {experiences.map(({ id, role, company, date, details }) => (
              <motion.div
                key={id}
                variants={itemSlideUp}
                className="dark:text-gray-100 border-b border-gray-700 pb-6"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h4 className="font-main text-lg font-semibold">
                    {role},{" "}
                    <span className="font-bold">
                      {company}
                    </span>
                  </h4>
                  <span className="text-sm mt-1 sm:mt-0">
                    {date}
                  </span>
                </div>

                {/* Bullet point details */}
                <ul className="mt-3 list-disc list-inside space-y-2 font-main dark:text-gray-100">
                  {details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-20">
            {/* Projects Section */}
            <Heading heading="work" />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
            >
              {projects.map(({ id, name, img, linkToPage, linkToSrc }) => (
                <motion.div variants={itemSlideUp} key={id}>
                  <Link href={`/details/${id}`}>
                    <a>
                      <Image
                        src={img}
                        width={345}
                        height={216}
                        layout="responsive"
                        className="rounded object-cover"
                        alt="work"
                      />
                    </a>
                  </Link>
                  <div className="mt-4 flex justify-between">
                    <h4 className="font-main text-md font-bold capitalize dark:text-gray-100">
                      {name}
                    </h4>
                    <div className="flex space-x-4 dark:text-gray-100 mt-1">
                      <a
                        href={linkToPage}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="w-4"
                          icon={faExternalLinkAlt}
                        />
                      </a>
                      {linkToSrc && (
                        <a
                          href={linkToSrc}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FontAwesomeIcon className="w-4" icon={faGithub} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
