export const Skills = () => {
  return (
    <div className=" flex flex-col gap-4    p-4 rounded-md  items-center bg-white dark:bg-[#1c2029]">
      <b className="text-3xl">Skills !!</b>
      <p>Regarding he skills or knowlwdge i posses</p>
      <div className="flex gap-8 flex-wrap justify-center">
        <div className="group shadow-md w-[344px]  p-4 flex flex-wrap relative items-center">
          {/* Individual blocks */}
          <div className="w-20 h-20 bg-[url(./assets/frontend/logo-javascript.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/frontend/html.png)] opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/frontend/css-3.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/frontend/react-2.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/frontend/tailwind-css-2.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/frontend/typescript-_1_.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          {/* Word appearing on hover */}
          <div className="absolute right-4 bottom-4 transform -translate-y-1/2 text-lg font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Frontend!!!
          </div>
        </div>
        <div className="group  shadow-md w-[344px] h-fit p-4 flex flex-wrap relative">
          {/* Individual blocks */}
          <div className="w-20 h-20 bg-[url(./assets/backend/nodejs-2.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/backend/express-109.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/backend/mongodb-icon-2.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/backend/socket-io.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          {/* Word appearing on hover */}
          <div className="absolute right-4 bottom-4 transform -translate-y-1/2 text-lg font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            backend!!
          </div>
        </div>
        <div className="group shadow-md w-[344px] h-fit p-4 flex flex-wrap relative">
          {/* Individual blocks */}
          <div className="w-20 h-20 bg-[url(./assets/tools/git.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/tools/npm-2.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/tools/postman.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/tools/visual-studio-code-1.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>

          {/* Word appearing on hover */}
          <div className="absolute right-4 bottom-4 transform -translate-y-1/2 text-lg font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            tools!!
          </div>
        </div>
        <div className="group shadow-md w-[344px] h-fit p-4 flex flex-wrap relative">
          {/* Individual blocks */}
          <div className="w-20 h-20 bg-[url(./assets/more/c-1.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/more/c.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-[url(./assets/more/java-14.png)] m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="w-20 h-20 bg-blue-800 m-3 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></div>
          {/* Word appearing on hover */}
          <div className="absolute right-4 bottom-4 transform -translate-y-1/2 text-lg font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Also Know basics of
          </div>
        </div>
      </div>
    </div>
  );
};
