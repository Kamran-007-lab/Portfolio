import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.jsx";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-gray-300 via-white to-gray-300"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row lg:gap-x-12">
        <div className="flex flex-col justify-center h-full w-full">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl pr-8 sm:text-7xl font-bold text-black"
          >
            I'm a
            <TypeAnimation
              sequence={["Developer", 2000, "Designer", 2000, "Fresher", 2000]}
              speed={50}
              className=" text-4xl font-bold text-black w-full"
              wrapper="p"
              repeat={Infinity}
            />
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-black text-lg py-4 max-w-md"
          >
            I am a highly motivated, focused and hard working individual with a
            passion for learning and honing new skills. Dedicated to the
            institution's overall success .
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-700 to-gray-400 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="inline-block">
          <motion.img
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 shadow-black shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
