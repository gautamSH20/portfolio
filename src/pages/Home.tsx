import { About } from "./About";
import { Contact } from "./Contatct";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <div className="h-screen">
      <Nav about="about" skills="skills" project="project" contact="contact" />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section
        id="project"
        className="h-fit bg-black m-16 rounded p-4 flex gap-8 flex-wrap "
      >
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};
