export const Skills = () => {
  return (
    <div className="ml-20 mr-20 flex flex-col gap-4  h-fit p-4 rounded-md justify-center items-center">
      <b className="text-3xl">Skills !!</b>
      <p>Regarding he skills or knowlwdge i posses</p>
      <div className="flex gap-8">
        <div className="group bg-purple-200 w-[344px] h-fit p-4 flex flex-wrap relative">
          {/* Individual blocks */}
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          {/* Word appearing on hover */}
          <div className="absolute right-4 bottom-4 transform -translate-y-1/2 text-lg font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Backend!!!
          </div>
        </div>
        <div className="group bg-purple-200 w-[344px] h-fit p-4 flex flex-wrap relative">
          {/* Individual blocks */}
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          {/* Word appearing on hover */}
          <div className="absolute right-4 bottom-4 transform -translate-y-1/2 text-lg font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Frontend!!!
          </div>
        </div>
      </div>
    </div>
  );
};
