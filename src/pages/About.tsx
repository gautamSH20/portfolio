import { EduIcon } from "../assets/project/Place";

export const About = () => {
  return (
    <div className="m-4 md:m-16 p-4 md:p-6 text-xl md:text-3xl rounded-md shadow-md flex flex-col justify-center items-center">
      <p className="text-base md:text-lg opacity-60">get to know me more</p>
      <b className="text-2xl md:text-4xl">ABOUT ME !!!!</b>

      <div className="flex flex-col md:flex-row w-full items-center gap-4 md:gap-10 mt-6">
        {/* Image Container */}
        <div className="bg-[url(./assets/Me.jpg)] bg-center bg-cover bg-no-repeat h-[40vh] w-[20vw] md:h-[80vh] md:w-1/3 rounded-xl"></div>

        {/* Content Container */}
        <div className="w-full md:w-2/3 flex flex-col items-center">
          {/* Education Card */}
          <section className="mt-2 w-2/3 max-w-[250px] h-[150px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center border-black border-2 text-base md:text-xl p-2">
            <EduIcon />
            <div className="mt-2">Education:</div>
            <p className="opacity-60 text-sm md:text-base">
              BCA: Bachelors of Computer Application
            </p>
          </section>

          {/* Description */}
          <section className="mt-6 text-sm md:text-md text-gray-600 text-center px-4 md:px-0">
            Aspiring JavaScript Developer with a passion for front-end and
            full-stack web development. Proficient in React.js and Node.js,
            seeking an internship to apply technical skills in developing
            innovative web applications while contributing to impactful projects
            in a collaborative team environment.
          </section>
        </div>
      </div>
    </div>
  );
};
