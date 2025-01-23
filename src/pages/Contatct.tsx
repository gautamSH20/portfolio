import { CallIcon, GitIcon, MailIcon } from "../assets/project/Place";

export const Contact = () => {
  return (
    <div className="w-full bg-blue-200 h-[20vh] flex  justify-center items-start">
      <div>
        <div>Contact me on :</div>
        <nav className="flex flex-reverse gap-4">
          <MailIcon />
          <GitIcon />
          <CallIcon />
        </nav>
      </div>
    </div>
  );
};
