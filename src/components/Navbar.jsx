import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <h1 className="m-10">Portfolio</h1>
      </div>

      <div className="m-8 flex flex-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/prashant-pushkar-bb310a198/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Pushkar-027">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/pushkar4654/">
          <FaInstagram />
        </a>
        <a href="">
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
