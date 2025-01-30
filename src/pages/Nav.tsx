import { useState } from "react";
import { Link } from "react-scroll";
import { CrossIcon, MenuIcon } from "../assets/project/Place";
interface nacConfig {
  about: string;
  skills: string;
  project: string;
  contact: string;
}

export const Nav = (prod: nacConfig) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((c) => !c);
  };
  return (
    <div className="flex justify-between h-[12vh] pl-4 pr-4 ml-14 mr-14 rounded-md shadow-md items-center dark:text-blue-400 text-black bg-white dark:bg-slate-700">
      <div className="text-2xl ">Gautam Sharma</div>
      <div className="hidden md:flex">
        <Link
          to={prod.about}
          smooth={true}
          duration={1000}
          className="m-2 font-semibold  hover:text-lg cursor-pointer"
        >
          about
        </Link>

        <Link
          to={prod.skills}
          smooth={true}
          duration={1000}
          className="m-2 font-semibold  hover:text-lg cursor-pointer"
        >
          skills
        </Link>

        <Link
          to={prod.project}
          smooth={true}
          duration={1000}
          className="m-2 font-semibold  hover:text-lg cursor-pointer"
        >
          projects
        </Link>

        <Link
          to={prod.contact}
          smooth={true}
          duration={1000}
          className="m-2 font-semibold  hover:text-lg cursor-pointer"
        >
          constact
        </Link>
      </div>
      {/* Mobile view  */}
      <button
        className="md:hidden p-2 focus:outline-hidden "
        onClick={toggleMenu}
      >
        {isMenuOpen ? "" : <MenuIcon />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-0 right-12 bg-white dark:bg-gray-800 dark:shadow-blue-200 shadow-lg rounded-md p-4 md:hidden z-50 ease-in duration-300">
          <button
            className="md:hidden p-2 focus:outline-hidden absolute right-0"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CrossIcon /> : ""}
          </button>
          <div className="flex flex-col space-y-4">
            <Link
              to={prod.about}
              smooth={true}
              duration={1000}
              className="m-2 font-semibold  hover:text-lg cursor-pointer"
            >
              about
            </Link>
            <Link
              to={prod.skills}
              smooth={true}
              duration={1000}
              className="m-2 font-semibold  hover:text-lg cursor-pointer"
            >
              skills
            </Link>

            <Link
              to={prod.project}
              smooth={true}
              duration={1000}
              className="m-2 font-semibold  hover:text-lg cursor-pointer"
            >
              projects
            </Link>

            <Link
              to={prod.contact}
              smooth={true}
              duration={1000}
              className="m-2 font-semibold  hover:text-lg cursor-pointer"
            >
              constact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
