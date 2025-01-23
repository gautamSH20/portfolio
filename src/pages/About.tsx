export const About = () => {
  return (
    <div className="m-16 p-6  text-3xl  rounded-md shadow-md flex flex-col justify-center items-center ">
      <p className="text-lg opacity-60">get to know me more</p>
      <b>ABOUT ME !!!!</b>
      <div className="flex w-90 items-cenetr gap-10">
        <div className="h-[80vh] w-2/3 bg-black">hello</div>
        <div className="w-2/3">
          <section>I am Gautam Sharma </section>
          <section className="mt-2">Eductaion : BCA ,2025</section>
          <section className="mt-2">
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
