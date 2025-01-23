import { CallIcon, GitIcon, MailIcon } from "../assets/project/Place";

export const Contact = () => {
  return (
    <div className="w-full  h-[60vh] flex flex-col text-center justify-center items-center">
      <p>Get in touch with me</p>
      <b className="text-[50px]">Contact Me:</b>
      <div className="group relative flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#333] rounded-full p-2 cursor-pointer">
        <CallIcon />
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm ">
          +91 9418567501
        </span>
      </div>
      <div className="group relative flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#333] rounded-full p-2 cursor-pointer">
        <MailIcon />
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm ">
          <a href="mailto:gs841400@gmail.com">Mail me here</a>
        </span>
      </div>
      <div className="group relative flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#333] rounded-full p-2 cursor-pointer">
        <GitIcon />
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm ">
          github
        </span>
      </div>
      <div className="opacity-60 bottom-0 mt-20 ">
        Copyright © 2025 Gautam sharma. All Rights Reserved.
      </div>
    </div>
  );
};
