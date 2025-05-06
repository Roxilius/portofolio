/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl bg-gradient-to-r from-blue-500 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
          My Portfolio
        </h1>
        {/* <img className="mx-2 w-10" src="" alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="text-blue-400" />
        <FaGithub className="text-slate-400" />
        <FaInstagram className="text-red-400" />
      </div>
    </nav>
  );
};

export default Header;
