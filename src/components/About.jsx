import React from "react";
import { motion } from "framer-motion";
import fadeIn  from "./fadeIn.jsx";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-auto bg-gradient-to-b from-gray-300 via-white to-gray-300  text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-black">
        <div className="pb-8">
          <motion.p
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            About
          </motion.p>
        </div>

        <motion.p
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-lg md:text-2xl"
        >
          My name is Kunwar Kamran Khan and I am a graduate from NIT
          Allahabad(2024). </motion.p>
          <motion.p
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-lg md:text-2xl "
          >
          <br />
          I have a keen interest in Competitive programming,
          Data Structures and Algorithms (<a className="underline underline-offset-4 italic font-semibold" href="https://codeforces.com/profile/007kam.khan">Codeforces</a> - pupil, <a className="underline underline-offset-4 italic font-semibold" href="https://www.codechef.com/users/tle_kam">Codechef</a> - 4 star,
          <a className="underline underline-offset-4 italic font-semibold" href="https://leetcode.com/u/kira-999/">Leetcode</a> 500+ problems) coupled with practical experience in projects
          based on react frameworks in Javascript.
        </motion.p>

        <br />
        <motion.p
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-lg md:text-2xl"
        >
          Furthermore, I possess expertise in areas such as Database Management
          Systems, Object-Oriented Programming, Operating Systems, and SQL.
        </motion.p>
        <br />
        
        <motion.p
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-lg md:text-2xl"
        >
          Some of my projects are listed below in the Project section.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
