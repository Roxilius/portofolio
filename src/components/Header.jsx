/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl bg-gradient-to-r from-blue-500 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
          My Portfolio
        </h1>
        {/* <img className="mx-2 w-10" src="" alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/fajri-khairan/">
          <FaLinkedin className="text-blue-400" />
        </a>
        <a href="https://github.com/Roxilius">
          <FaGithub className="text-slate-400" />
        </a>
        <a href="https://www.instagram.com/roxilius___/">
          <FaInstagram className="text-red-400" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
