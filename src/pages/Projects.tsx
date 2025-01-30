interface proIN {
  title?: string;
  gitLink?: string;
  demoLink?: string;
}

export const Projects = (prods: proIN) => {
  return (
    <div className="text-white h-96 shadow shadow-md hover:shadow-lg bg-white shadow-black hover:w-[52vh] hover:h-98  w-[40vh] md:w-[50vh] rounded-md  p-4 ease-in duration-300">
      <div className="h-3/5 p-2 bg-black rounded-xs"></div>
      <div className="text-black mt-4 text-center font-bold">
        {prods.title} hello
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="border-2 text-black p-2 rounded-md hover:bg-black hover:text-white ease-in duration-300"
          onClick={() => {}}
        >
          github
        </button>
        <button
          className="border-2 text-black p-2 rounded-xl hover:bg-black hover:text-white ease-in duration-300 "
          onClick={() => {}}
        >
          demo
        </button>
      </div>
    </div>
  );
};
