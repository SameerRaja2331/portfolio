import Image from "next/image";
import Head from "next/head";

import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

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
import web7 from "../../public/web7.jpg";
import web8 from "../../public/web8.jpg";

// Define variables for text content
const pageTitle = "Sameer Raja Portfolio";
const role = "Software Engineer and Programmer";
const name = "Sameer Raja";
const quote = "#Never Settle";

const summary = ` Talented Software Developer equipped with great coding,
debugging and project management abilities. Accomplishes
project goals consistently with elegant, scalable code.
Works great with team members under Agile and Scrum frameworks.
`;

const linkedin = "https://www.linkedin.com/in/sameerraja31/";
const github = "https://github.com/SameerRaja2331";
const email = `mailto:${"rajasameer.bhanu@gmail.com"}`;

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
        <title>{pageTitle}</title>
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950 bg-gradient-page">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-3xl">{quote}</h1>
            <ul className="flex items-center">
              <li>
                <button
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 card"
                  onClick={openResume}
                >
                  Resume
                </button>
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 card"
                  onClick={openCv}
                >
                  CV
                </button>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              {name}
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">{role}</h3>
            <p className="text-md py-2 leading-6 text-gray-800">{summary}</p>
          </div>
          <div className=" text-5xl flex justify-center gap-14 py-3">
            <a className="bard" href={linkedin}>
              <AiFillLinkedin />
            </a>
            <a className="bard" href={email}>
              <AiFillMail />
            </a>
            <a className="bard" href={github}>
              <AiFillGithub />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-98 md:w-98">
            <Image src={deved} alt="" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-4xl py-3">Skills</h3>
            <ul className="list-disc pl-6 text-black pb-5">
              <li>
                <p>
                  <span className="text-xl">Programming Languages:</span>{" "}
                  <span className="text-blue-900 text-xl">
                    Python, JavaScript, TypeScript, SQL, C, C++, PHP, Java,
                    HTML, CSS{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="text-xl"> Database Technologies:</span>{" "}
                  <span className="text-blue-900 text-xl">
                    MySQL, Mongo DB, Oracle DB, SQL Server{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="text-xl">Frameworks, Web tech:</span>{" "}
                  <span className="text-blue-900 text-xl">
                    Django, React.js, Preact, Flask, React/Redux, NodeJS,
                    Angular 8+, Java Spring Framework, Jest{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="text-xl"> Cloud Computing:</span>{" "}
                  <span className="text-blue-900 text-xl">
                    Amazon Web Services (AWS), Microsoft Azure{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="text-xl">Automation Tools:</span>{" "}
                  <span className="text-blue-900 text-xl">
                    Docker, Jenkins, Git, Jira{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="text-xl">IDE Tools:</span>{" "}
                  <span className="text-blue-900 text-xl">
                    PyCharm, Eclipse, Microsoft Visual Studio Code, IntelliJ
                    IDEA{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="text-xl"> Operating System:</span>{" "}
                  <span className="text-blue-900 text-xl">
                    Linux (Ubuntu), Microsoft Windows{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="text-xl">Other:</span>{" "}
                  <span className="text-blue-900 text-xl">
                    Java/J2EE, OOPS concept, Proto Buffers, Servlets, JSP, JDBC,
                    XML, RESTful APIs, JSON, Bitbucket, Spring Boot, Postman{" "}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-4xl py-3">Experience</h3>

            <h2 className="text-2xl py-1">
              Anuta Networks (Software Engineer)
            </h2>
            <ul className="list-disc pl-6 text-black pb-5">
              <li>
                <p>
                  Led an advanced Machine Learning project, applying{" "}
                  <span className="text-teal-800">
                    {" "}
                    ARIMA, LSTM, and Prophet models{" "}
                  </span>{" "}
                  for precise resource utilization forecasting.
                </p>
              </li>
              <li>
                <p>
                  Employed{" "}
                  <span className="text-teal-800">
                    React, Flask, Redux toolkit (for efficient state
                    management), Node, and Java Spring Framework{" "}
                  </span>{" "}
                  to deliver seamless user experiences with dynamic UIs and
                  robust back-end functionality.
                </p>
              </li>
              <li>
                <p>
                  Utilized{" "}
                  <span className="text-teal-800">
                    Aws EC2 for hosting, S3 for secure file storage, and RDS for
                    user data management{" "}
                  </span>{" "}
                  to ensure seamless user access to files and data.
                </p>
              </li>
              <li>
                <p>
                  Applied{" "}
                  <span className="text-teal-800">
                    {" "}
                    J2EE principles, OOP concepts, Protobuf for data
                    serialization, Servlets, JSP for web development, JDBC for
                    database connectivity, and handled XML and JSON{" "}
                  </span>
                  for data exchange in web applications.
                </p>
              </li>
              <li>
                <p>
                  Streamlined development with{" "}
                  <span className="text-teal-800">
                    Docker, Jenkins, Git, and JIRA
                  </span>
                  , improving code quality and project management.
                </p>
              </li>
              <li>
                <p>
                  Worked in{" "}
                  <span className="text-teal-800">
                    Linux (Ubuntu) environments{" "}
                  </span>{" "}
                  for compatibility with production servers.
                </p>
              </li>
            </ul>
            <h2 className="text-2xl py-1">Metacognition (Software Engineer)</h2>

            <ul className="list-disc pl-6 text-black pb-5">
              <li>
                <p>
                  Developed responsive and modern user interfaces for
                  enterprise-level web applications using{" "}
                  <span className="text-teal-800">
                    {" "}
                    React.js, Angular, JavaScript, TypeScript, HTML5 and
                    Tailwind CSS.{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Designed and implemented scalable{" "}
                  <span className="text-teal-800">
                    RESTful APIs, authentication mechanisms, and optimized
                    database queries leveraging Java, Spring Framework and
                    Spring Boot{" "}
                  </span>{" "}
                  over the course of multiple projects.
                </p>
              </li>
              <li>
                <p>
                  Worked extensively with{" "}
                  <span className="text-teal-800">
                    {" "}
                    Microsoft Azure services{" "}
                  </span>
                  including leveraging cloud infrastructure for authentication,
                  storage, and scaling VM instances to meet application demands.
                </p>
              </li>
              <li>
                <p>
                  Collaborated closely with{" "}
                  <span className="text-teal-800">
                    cross-functional agile teams{" "}
                  </span>
                  to break down requirements, estimate timelines, prioritize
                  workflows, and ensure on-time delivery.
                </p>
              </li>
              <li>
                <p>
                  Led version control, build processes, and codebase management
                  for various client projects using{" "}
                  <span className="text-teal-800">
                    Git workflows and GitHub repositories.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Contributed to the full{" "}
                  <span className="text-teal-800">
                    {" "}
                    software development life cycle (SDLC){" "}
                  </span>
                  including gathering requirements, scoping, development,
                  testing, deployment, and maintenance of enterprise-scale
                  applications.
                </p>
              </li>
              <li>
                <p>
                  Strong <span className="text-teal-800"> OOPS, J2EE </span>
                  programming knowledge with experience building and maintaining
                  Java-based RESTful microservices at scale.
                </p>
              </li>
              <li>
                <p>
                  <span className="text-teal-800">
                    Quick learner adept at picking up new skills and
                    technologies{" "}
                  </span>
                  as needed. Passionate about staying up to date with the latest
                  web development best practices and industry standards.
                </p>
              </li>
            </ul>

            <h2 className="text-2xl py-1">KLEF (Peer Mentor)</h2>
            <ul className="list-disc pl-6 text-black pb-5">
              <li>
                <p>
                  Mentored undergraduates in intricate ML coursework, ensuring
                  their mastery of{" "}
                  <span className="text-teal-800">
                    {" "}
                    Algorithms, Machine Learning models, and Neural Networks.{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Gained technical proficiency in{" "}
                  <span className="text-teal-800">
                    {" "}
                    Java and the Spring framework{" "}
                  </span>
                  for developing enterprise applications and deploying them
                  effectively within the J2EE environment, utilizing Oracle DB
                  as database.
                </p>
              </li>
              <li>
                <p>
                  Developed and managed technical content for online AI courses,
                  integrating{" "}
                  <span className="text-teal-800">
                    Spring Boot for building RESTful APIs.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Spearheaded research and innovative projects, harnessing Java
                  and Spring Boot for building scalable solutions. Utilized
                  <span className="text-teal-800">
                    {" "}
                    Angular, HTML5, CSS for front-end development{" "}
                  </span>
                  and integrated them with Spring-powered backend services.
                </p>
              </li>
              <li>
                <p>
                  Provided agile assistance during lab sessions, troubleshooting
                  issues related to{" "}
                  <span className="text-teal-800">
                    data preprocessing, model optimization, and hyperparameter
                    tuning.
                  </span>
                </p>
              </li>

              <li>
                <p>
                  Orchestrated instructional sessions, explaining{" "}
                  <span className="text-teal-800">ML concepts </span>
                  and guiding students in utilizing Spring and Spring Boot for
                  building web applications and services.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl">Core Projects</h3>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 card">
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
                <h4 className="py-4 text-lg text-red-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">OpenCV</p>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">ML Models</p>
                <p className="text-gray-800 py-1">React.Js</p>
                <p className="text-gray-800 py-1">Node.Js</p>
                <p className="text-gray-800 py-1">Spring Boot</p>
                <p className="text-gray-800 py-1">HTML/CSS</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 card">
                <Image src={consulting} alt="" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Heart Disease Prediction using Neural Networks
                </h3>
                <p className="py-2">
                  Utilized decision trees, ANNs, and random forest. Conducted
                  data preprocessing, feature engineering, and feature selection
                  to optimize model performance and Prediction of heart disease.
                </p>
                <h4 className="py-4 text-lg text-red-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">TensorFlow</p>
                <p className="text-gray-800 py-1">Keras</p>
                <p className="text-gray-800 py-1">ML models</p>
                <p className="text-gray-800 py-1">Neural Networks</p>
                <p className="text-gray-800 py-1">Feature Engineering</p>
                <p className="text-gray-800 py-1">Angular 8+</p>
                <p className="text-gray-800 py-1">Git</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 card">
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
                <h4 className="py-4 text-lg text-red-600">Tech Stack Used</h4>
                <p className="text-gray-800 py-1">Firebase</p>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">MongoDB</p>
                <p className="text-gray-800 py-1">React.Js</p>
                <p className="text-gray-800 py-1">J2EE, Spring Framework</p>
                <p className="text-gray-800 py-1">HTML/CSS</p>
                <p className="text-gray-800 py-1">Aws s3, Ec2</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-4xl py-1 dark:text-white ">Certifications</h3>
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
                src={web6}
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
                src={web7}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web8}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
