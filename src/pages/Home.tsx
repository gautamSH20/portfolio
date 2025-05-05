import { DarkIcon, LightIcon, MailIcon2 } from "../assets/project/Place";
import { useEffect, useRef, useState } from "react";
import { About } from "./About";
import { Contact } from "./Contatct";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
  const [black, setBlak] = useState(false);
  const [isvisble, setIsvisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsvisible((e) => !e);
          console.log(isvisble);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className={`${black ? "dark" : null}`}>
      <div
        className="absolute top-0 left-1/2 right-1/2 text-black dark:text-blue-400 "
        onClick={() => {
          setBlak((e) => !e);
        }}
      >
        {black ? <LightIcon /> : <DarkIcon />}
      </div>
      <div className="  bg-[#F1F1F1] dark:bg-[#030712] ">
        <section>
          <Nav
            about="about"
            skills="skills"
            project="project"
            contact="contact"
          />
        </section>
        <section className="animate-pro-top min-h-screen   h-auto md:h-[100vh] mt-0 flex flex-wrap items-center justify-center gap-8 p-4">
          {/* Image Container */}
          <div className="h-80 w-80 dark:bg-blue-300 md:h-[70vh] md:w-[70vh] rounded-full bg-[url(./assets/My.png)] bg-center bg-cover bg-no-repeat max-w-[70vh]"></div>

          {/* Content Container */}
          <div
            ref={sectionRef}
            className=" w-full shadow  bg-white dark:bg-[#1c2029] dark:shadow-sm dark:shadow-white  md:w-1/3 flex rounded-md dark:text-white  flex-col justify-center items-center p-3 text-center border-2 border-black h-auto lg:h-[75vh] mt-8 md:mt-0"
          >
            <p className="  opacity-60 text-xl text-black dark:text-white">
              Hi! I am
            </p>
            <p className="text-4xl md:text-6xl mt-3 text-black font-bold dark:text-white">
              Gautam Sharma
            </p>
            <p className="font-bold dark:text-violent-700 text-gray-400 text-2xl md:text-4xl mt-4">
              Web Developer
            </p>
            <span className="text-xl flex gap-4 md:gap-8 mt-4 flex-wrap justify-center">
              <a href="https://github.com/gautamSH20">
                <button className="border-2 border-black dark:border-white text-black p-2 rounded-xl w-32 hover:shadow-md hover:bg-black dark:hover:shadow-white dark:hover:w-34 hover:text-white ease-in duration-300 dark:text-white">
                  GitHub
                </button>
              </a>
              <a
                href="/Resume/Gautam.pdf"
                target="_blank"
                className="bg-black dark:border-2 dark:border-white text-white p-2 rounded-xl w-32 dark:hover:shadow-white hover:shadow-md dark:hover:w-34 ease-in duration-300 inline-block text-center"
                //download="Gautam_Resume.pdf" // Optional: forces download
              >
                Resume
              </a>
            </span>
            <div className="flex gap-4 md:gap-8 mt-4 text-black dark:text-white">
              <MailIcon2 />
            </div>
          </div>
        </section>
        <section id="about" className="animate-pro-top">
          <About />
        </section>
        <section
          className=" animate-pro-top ml-0 mr-0 md:ml-10 md:mr-10"
          id="skills"
        >
          <Skills />
        </section>
        <section
          id="project"
          className="animate-pro-top ml-0 mr-0 md:ml-10 md:mr-10  mt-20  flex flex-col justify-center items-center p-4 bg-white dark:bg-[#1c2029]"
        >
          <p className="dark:text-violet-300 text-black">
            Take a look at my projects{" "}
          </p>
          <b className="text-[50px] font-bold text-black dark:text-blue-500">
            {" "}
            Projects:
          </b>
          <div
            ref={sectionRef}
            className="  rounded-xs p-4 flex gap-8 flex-wrap justify-center "
          >
            <Projects
              imgLink="bg-[url(./assets/P1.png)]"
              title="SECOND-BRAIN"
              desrp=" urname-gaautam1234 pass-admin1234"
              gitLink="https://github.com/gautamSH20/brain-app-tsc"
              demoLink="https://in-brain.onrender.com"
            />
            <Projects
              imgLink="bg-[url(./assets/P2.png)]"
              title="Youtube-Mp3"
              gitLink="https://github.com/gautamSH20/ytmp3"
              demoLink="https://in-ytmp3.onrender.com"
            />
            <Projects
              imgLink="bg-[url(./assets/P3.jpg)]"
              title="Video call"
              desrp="you staright go to video call by adding random url at the end of the link"
              gitLink="https://github.com/gautamSH20/zoom-project"
              demoLink="https://in-vedio1.onrender.com/"
            />
          </div>
        </section>
        <section id="contact" className="h-full mt-20">
          <Contact />
        </section>
      </div>
    </div>
  );
};
