import { EduIcon } from "../assets/project/Place";

export const About = () => {
  return (
    <div className="m-4 md:m-16 p-4 md:p-6 text-xl md:text-3xl bg-white dark:bg-[#1c2029] rounded-md shadow-md flex flex-col justify-center items-center">
      <p className="text-base md:text-lg opacity-60 dark:text-violet-300 text-black">
        get to know me more
      </p>
      <b className="text-2xl md:text-4xl text-black dark:text-blue-500">
        ABOUT ME !!!!
      </b>

      <div className="flex flex-wrap md:flex-nowrap sm w-full justify-center items-center gap-4 md:gap-6 mt-6">
        {/* Image Container */}
        <div className="bg-[url(./assets/My2.png)] dark:bg-gray-300  bg-center bg-cover bg-no-repeat sm:h-[40vh] sm:w-[50vh]  h-[40vh] border-2 border-black w-[50vh] md:h-[80vh] md:w-[90vh] rounded-xl"></div>

        {/* Content Container */}
        <div className="w-full md:w-2/3 flex flex-col items-center">
          {/* Education Card */}
          <section className="mt-2  w-2/3 max-w-[250px] h-[150px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center border-black border-2 text-base text-xl md:text-xl p-2">
            <div>
              <EduIcon />
            </div>
            <div className="mt-2">Education:</div>
            <p className="opacity-60 text-xl md:text-base">
              BCA: Bachelors of Computer Application
            </p>
          </section>

          {/* Description */}
          <section className="mt-6 text-xl md:text-md text-gray-600  text-center px-4 md:px-0">
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
