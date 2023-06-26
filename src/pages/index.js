import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import deved from "../../public/dev-ed-wave.jpg";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import { useState } from "react";
import web1 from "../../public/web1.jpg";
import web2 from "../../public/web2.jpg";
import web3 from "../../public/web3.jpeg";
import web4 from "../../public/web4.jpg";
import web5 from "../../public/web5.jpg";
import web6 from "../../public/web6.jpg";
import { FaAnchor, FaCheck } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const openResume = () => {
    window.open(
      "/Resume.pdf",
      "_blank",
      "width=800,height=700,top=100,left=100"
    );
  };

  const openCv = () => {
    window.open("/CV.pdf", "_blank", "width=800,height=700,top=100,left=100");
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sameer Raja Portfolio</title>
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Developed by</h1>
            <ul className="flex items-center">
              <li>
                {/* <BsFillMoonStarsFill
                  onclick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                /> */}
                <button
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  onClick={openResume}
                >
                  Resume
                </button>
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  onClick={openCv}
                >
                  CV
                </button>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Sameer Raja
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Software Developer and Programmer
            </h3>
            <p className="text-md py-2 leading-6 text-gray-800">
              Talented Software Developer equipped with great coding, debugging
              and project management abilities. Accomplishes project goals
              consistently with elegant, scalable code. Works great with team
              members under Agile and Scrum frameworks.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-14 py-3">
            <a href="https://www.linkedin.com/in/sameerraja31/">
              <AiFillLinkedin />
            </a>
            <a href={`mailto:${"rajasameer.bhanu@gmail.com"}`}>
              <AiFillMail />
            </a>
            <a href="https://github.com/SameerRaja2331">
              <AiFillGithub />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-98 md:w-98">
            <Image src={deved} alt="" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-3">Experience</h3>
            <h2 className="text-2xl py-1">
              Anuta Networks (Software Developer)
            </h2>
            <ul className="list-disc pl-6 text-black">
              <li className="flex items-start">
                <FaAnchor text-2xl className="text-teal-800 mt-1 mr-2" />
                <p>
                  Experienced in{" "}
                  <span className="text-teal-800">Machine Learning </span>
                  forecasting for device resource usage.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor text-2xl className="text-teal-800 mt-1 mr-2" />
                Redesigned websites for improved navigation and visual appeal.
              </li>
              <li className="flex items-start">
                <FaAnchor text-2xl className="text-teal-800 mt-1 mr-2" />
                Skilled in <span className="text-teal-800">
                  ReactJS{" "}
                </span>and <span className="text-teal-800">NodeJS </span>for
                frontend development.
              </li>
              <li className="flex items-start">
                <FaAnchor text-2xl className="text-teal-800 mt-1 mr-2" />
                Managed real-time machine learning projects and utilized{" "}
                <span className="text-teal-800">Jenkins </span>
                for automated build and deployment.
              </li>
              <li className="flex items-start">
                <FaAnchor text-2xl className="text-teal-800 mt-1 mr-2" />
                Proficient in <span className="text-teal-800">git</span>,
                debugging, and implementing timely fixes.
              </li>
            </ul>
            <h2 className="text-2xl py-1">
              Metacognition (Software Intern Developer)
            </h2>

            <ul className="list-disc pl-6 text-gray-800">
              <li className="flex items-start">
                <FaAnchor text-2xl className="text-teal-800 mt-1 mr-2" />
                <p>
                  Designed and developed a web applications user interface using{" "}
                  <span className="text-teal-800">React.JS</span> and{" "}
                  <span className="text-teal-800">Next.Js</span>, showcasing
                  strong front-end development skills.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Proficient in managing databases, particularly{" "}
                  <span className="text-teal-800">MongoDB</span>, to store and
                  handle data in various formats.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Implemented{" "}
                  <span className="text-teal-800">Microsoft Azure</span> cloud
                  services for application authentication.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Collaborated effectively with team members in daily{" "}
                  <span className="text-teal-800">scrum</span> meetings for task
                  planning and prioritization.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Utilized <span className="text-teal-800">GitHub</span> as the
                  primary version control system for regular code commits and
                  updates.
                </p>
              </li>
            </ul>

            <h2 className="text-2xl py-1">
              KLEF (Peer Mentor & Lab Developer)
            </h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Provided mentorship to undergraduate students in{" "}
                  <span className="text-teal-800">machine learning</span>{" "}
                  coursework, focusing on their academic success.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Actively contributed to the advancement of{" "}
                  <span className="text-teal-800">artificial intelligence</span>{" "}
                  and <span className="text-teal-800">machine learning</span>.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Offered guidance and support to students by addressing their
                  doubts during lab sessions.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Engaged in online courses related to{" "}
                  <span className="text-teal-800">artificial intelligence</span>
                  .
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Conducted class and lab sessions to reinforce machine learning
                  concepts and enhance student outcomes.
                </p>
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                <p>
                  Served as a lab developer for{" "}
                  <span className="text-teal-800">artificial intelligence</span>{" "}
                  and <span className="text-teal-800">machine learning</span>.
                </p>
              </li>
            </ul>

            <h2 className="text-2xl py-1">KLEF (Technical lead)</h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                Engaged in the{" "}
                <span className="text-teal-800">Kognitiv Club</span>, gaining
                hands-on experience in{" "}
                <span className="text-teal-800">machine learning</span> and{" "}
                <span className="text-teal-800">deep learning</span>.
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                Completed real-world projects, enhancing practical skills and
                understanding of <span className="text-teal-800">AI</span>.
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                Stayed updated with key technologies, platforms, and trends.
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                Developed proficiency in{" "}
                <span className="text-teal-800">Python</span>,{" "}
                <span className="text-teal-800">JavaScript</span>,{" "}
                <span className="text-teal-800">Machine Learning</span>,{" "}
                <span className="text-teal-800">HTML</span>, and{" "}
                <span className="text-teal-800">CSS</span>.
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                Organized and conducted one-week courses as per requirements.
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                Created assessments and user polls to evaluate course
                effectiveness, adapting content and delivery to meet student
                learning objectives.
              </li>
              <li className="flex items-start">
                <FaAnchor className="text-teal-800 mt-1 mr-2" />
                Managed <span className="text-teal-800">MongoDB</span> databases
                for various projects.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl py-3">Core Projects</h3>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={design} alt="" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Attendance Management System
                </h3>
                <p className="py-2">
                  Implemented an automatic student identification and face
                  detection from cctv. Integrated machine learning techniques to
                  recognize and match student faces, automating attendance
                  marking.
                </p>
                <h4 className="py-4 text-teal-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">OpenCV</p>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">ML Models</p>
                <p className="text-gray-800 py-1">React.Js</p>
                <p className="text-gray-800 py-1">Next.Js</p>
                <p className="text-gray-800 py-1">HTML/CSS</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={consulting} alt="" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Heart Disease Prediction using Neural Networks
                </h3>
                <p className="py-2">
                  Utilized decision trees, ANNs, and random forest. Conducted
                  data preprocessing, feature engineering, and feature selection
                  to optimize model performance and Prediction of heart disease.
                </p>
                <h4 className="py-4 text-teal-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">TensorFlow</p>
                <p className="text-gray-800 py-1">Keras</p>
                <p className="text-gray-800 py-1">ML models</p>
                <p className="text-gray-800 py-1">Neural Networks</p>
                <p className="text-gray-800 py-1">Feature Engineering</p>
                <p className="text-gray-800 py-1">Git</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={code} alt="" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  React.Js To-do Tasks Application
                </h3>
                <p className="py-2">
                  Developed a web-based To-Do App using React.js, incorporating
                  user auth, task creation, editing, and completion features.
                  Integrated Google Firebase for secure data storage and
                  real-time updates.
                </p>
                <h4 className="py-4 text-teal-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">Firebase</p>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">MongoDB</p>
                <p className="text-gray-800 py-1">React.Js</p>
                <p className="text-gray-800 py-1">Next.Js</p>
                <p className="text-gray-800 py-1">HTML/CSS</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Certifications</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p> */}
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
