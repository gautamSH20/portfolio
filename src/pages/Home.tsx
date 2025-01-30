import { GitIcon2, MailIcon2 } from "../assets/project/Place";
import { About } from "./About";
import { Contact } from "./Contatct";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

interface propHome {
  val?: boolean;
}

export const Home = (prop: propHome) => {
  return (
    <div className={`${prop.val ? "dark" : null}`}>
      <div className=" bg-[#F1F1F1] dark:bg-[#030712] ">
        <Nav
          about="about"
          skills="skills"
          project="project"
          contact="contact"
        />
        <section className="min-h-screen   h-auto md:h-[100vh] mt-0 flex flex-wrap items-center justify-center gap-8 p-4">
          {/* Image Container */}
          <div className="h-80 w-80 dark:bg-blue-300 md:h-[70vh] md:w-[70vh] rounded-full bg-[url(./assets/My.png)] bg-center bg-cover bg-no-repeat max-w-[70vh]"></div>

          {/* Content Container */}
          <div className="w-full shadow  bg-white dark:bg-[#1c2029] dark:shadow-sm dark:shadow-white  md:w-1/3 flex rounded-md dark:text-white  flex-col justify-center items-center p-3 text-center border-2 border-black h-auto md:h-[75vh] mt-8 md:mt-0">
            <p className="opacity-60 text-xl text-black dark:text-white">
              Hi! I am
            </p>
            <p className="text-4xl md:text-6xl mt-3 text-black font-bold dark:text-white">
              Gautam Sharma
            </p>
            <p className="font-bold dark:text-violent-700 text-gray-400 text-2xl md:text-4xl mt-4">
              Web Developer
            </p>
            <span className="text-xl flex gap-4 md:gap-8 mt-4 flex-wrap justify-center">
              <button className="border-2 border-black dark:border-white text-black p-2 rounded-xl w-32 hover:shadow-md hover:bg-black dark:hover:shadow-white dark:hover:w-34 hover:text-white ease-in duration-300 dark:text-white">
                GitHub
              </button>
              <button className="bg-black dark:border-2 dark:border-white text-white p-2 rounded-xl w-32 dark:hover:shadow-white hover:shadow-md dark:hover:w-34 ease-in duration-300">
                Resume
              </button>
            </span>
            <div className="flex gap-4 md:gap-8 mt-4">
              <GitIcon2 />
              <MailIcon2 />
            </div>
          </div>
        </section>
        <section id="about">
          <About />
        </section>
        <section className="ml-0 mr-0 md:ml-10 md:mr-10" id="skills">
          <Skills />
        </section>
        <section
          id="project"
          className="ml-0 mr-0 md:ml-10 md:mr-10  mt-20  flex flex-col justify-center items-center p-4 bg-white dark:bg-[#1c2029]"
        >
          <p>Tke a look at my projects </p>
          <b className="text-[50px] font-bold"> Projects:</b>
          <div className=" rounded-xs p-4 flex gap-8 flex-wrap justify-center ">
            <Projects />
            <Projects />
          </div>
        </section>
        <section id="contact" className="h-full mt-20">
          <Contact />
        </section>
      </div>
    </div>
  );
};
