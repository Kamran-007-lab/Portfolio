import React from "react";
import { motion } from "framer-motion";
import fadeIn from "./fadeIn.jsx";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import arduino from "../assets/arduino.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import clogo from "../assets/clogo.png";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 6,
      src: arduino,
      title: "Arduino",
      style: "shadow-teal-700",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-black",
    },
    {
      id: 9,
      src: clogo,
      title: "C++",
      style: "shadow-sky-800",
    },
  ];

  return (
    <div
      id="technologies"
      className="bg-gradient-to-b from-gray-300 via-white to-gray-300 w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Stack
          </p>
          <p className="py-6 text-xl">
            These are the technologies I've worked with
          </p>
        </motion.div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
