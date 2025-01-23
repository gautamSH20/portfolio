import { EduIcon } from "../assets/project/Place";

export const About = () => {
  return (
    <div className="m-16 p-6  text-3xl  rounded-md shadow-md flex flex-col justify-center items-center ">
      <p className="text-lg opacity-60">get to know me more</p>
      <b>ABOUT ME !!!!</b>
      <div className="flex w-90 items-cenetr gap-10">
        <div className="h-[80vh] w-1/3 bg-black">hello</div>
        <div className="w-2/3">
          <section className="mt-2 w-[350px] h-[150px] bg-white rounded-xl shadow-md  flex flex-col flex-wrap justify-center items-center text-center border-black border-2 text-xl">
            <EduIcon />
            <div className="mt-2">Eductaion:</div>
            <p className="opacity-60">BCA:Bachelores of computer application</p>
          </section>
          <section className="mt-6 text-md text-gray-600">
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
