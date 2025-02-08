interface proIN {
  title?: string;
  gitLink?: string;
  demoLink?: string;
  desrp?: string;
  imgLink?: string;
}

export const Projects = (prods: proIN) => {
  return (
    <div className="text-white h-107 lg:h-98 bg-gray-300 dark:shadow-purple-800 shadow shadow-md hover:shadow-lg  shadow-black hover:w-[52vh] hover:h-99  w-[40vh] md:w-[50vh] rounded-md  p-4 ease-in duration-300">
      <div
        className={`h-55 p-2 bg-no-repeat bg-cover bg-center ${
          prods.imgLink ? prods.imgLink : "bg-black"
        } rounded-xs`}
      ></div>
      <div className="text-black mt-4 text-center font-bold">
        {prods.title}
        <p className="opacity-60 font-light mb-2">
          {prods.desrp ? prods.desrp : null}
        </p>
      </div>
      <div className="flex justify-center gap-4 ">
        <a href={`${prods.gitLink}`} target="_blank">
          <button className="border-2 border-black text-black p-2 rounded-md hover:bg-black hover:text-white ease-in duration-300">
            github
          </button>
        </a>
        <a href={`${prods.demoLink}`} target="_blank">
          <button className="border-2 border-black text-black p-2 rounded-xl hover:bg-black hover:text-white ease-in duration-300 ">
            demo
          </button>
        </a>
      </div>
    </div>
  );
};
