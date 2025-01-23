import { Link } from "react-scroll";
interface nacConfig {
  about: string;
  skills: string;
  project: string;
  contact: string;
}

export const Nav = (prod: nacConfig) => {
  return (
    <div className="flex justify-between h-[12vh] pl-4 pr-4 ml-14 mr-14 rounded-md shadow-md items-center bg-gray-200 ">
      <div className="text-2xl ">Gautam Sharma</div>
      <div>
        <Link
          to={prod.about}
          smooth={true}
          duration={1000}
          className="m-2 font-semibold "
        >
          about
        </Link>

        <Link
          to={prod.skills}
          smooth={true}
          duration={1000}
          className="m-2 font-semibold"
        >
          skills
        </Link>

        <Link
          to={prod.project}
          smooth={true}
          duration={1000}
          className="m-2 font-semibold"
        >
          projects
        </Link>

        <Link
          to={prod.contact}
          smooth={true}
          duration={1000}
          className="m-2 font-semibold"
        >
          constact
        </Link>
      </div>
    </div>
  );
};
