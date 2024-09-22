import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-500" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-blue-400" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptFill className="text-7xl text-yellow-400" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-white-400" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
