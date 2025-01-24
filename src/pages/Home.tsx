import { GitIcon2, MailIcon2 } from "../assets/project/Place";
import { About } from "./About";
import { Contact } from "./Contatct";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <div className="h-full bg-[#F1F1F1] ">
      <Nav about="about" skills="skills" project="project" contact="contact" />
      <section className="min-h-screen h-auto md:h-[100vh] mt-0 flex flex-wrap items-center justify-center gap-8 p-4">
        {/* Image Container */}
        <div className="h-96 w-full md:h-[70vh] md:w-[70vh] rounded-full bg-[url(./assets/My.png)] bg-center bg-cover bg-no-repeat max-w-[70vh]"></div>

        {/* Content Container */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-3 text-center border-2 border-black h-auto md:h-[75vh] mt-8 md:mt-0">
          <p className="opacity-60 text-xl">Hi! I am</p>
          <p className="text-4xl md:text-6xl mt-3 font-bold">Gautam Sharma</p>
          <p className="font-bold text-gray-400 text-2xl md:text-4xl mt-4">
            Web Developer
          </p>
          <span className="text-xl flex gap-4 md:gap-8 mt-4 flex-wrap justify-center">
            <button className="bg-black text-white p-2 rounded-xl w-32">
              GitHub
            </button>
            <button className="bg-black text-white p-2 rounded-xl w-32">
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
      <section id="skills">
        <Skills />
      </section>
      <section
        id="project"
        className="h-fit  m-16 flex flex-col justify-center items-center p-4 "
      >
        <p>Tke a look at my projects </p>
        <b className="text-[50px] font-bold"> Projects:</b>
        <div className=" rounded p-4 flex gap-8 flex-wrap justify-center">
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </div>
      </section>
      <section id="contact" className="h-[400px]">
        <Contact />
      </section>
    </div>
  );
};
