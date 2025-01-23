import { About } from "./About";
import { Contact } from "./Contatct";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <div className="h-full bg-[#F1F1F1]">
      <Nav about="about" skills="skills" project="project" contact="contact" />
      <section className="h-[100vh]  mt-0 flex  items-center justify-center gap-8">
        <div className=" h-[75vh] bg-red-700 w-[75vh] rounded-full "></div>
        <div className="w-1/3 text-[12vh]">
          Gautam Sharma<br></br>
          <span className="text-xl flex gap-8">
            <button className="bg-black text-white p-2 rounded-xl">
              github
            </button>
            <button className="bg-black text-white p-2 rounded-xl">
              Resume
            </button>
          </span>
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
