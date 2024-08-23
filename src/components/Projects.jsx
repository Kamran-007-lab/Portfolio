import React from "react";
import ray from "../assets/portfolio/ray.jpg";
import minderhome from "../assets/portfolio/minderhome.jpg"
import profilefyi from "../assets/portfolio/profilefyi.jpg"
import portfolio from "../assets/portfolio/portfolio.jpg"
import movie from "../assets/portfolio/movie.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: minderhome,
      value:'Minder',
      url:'https://github.com/Kamran-007-lab/Minder'
    },
    {
      id: 2,
      src: profilefyi,
      value:'Profile.fyi',
      url:'https://github.com/Kamran-007-lab/Profilefyi'
    },
    {
      id: 3,
      src: portfolio,
      value: 'Portfolio',
      url:'https://github.com/Kamran-007-lab/Portfolio'
    },
    {
      id: 4,
      src: ray,
      value: 'R.A.Y.',
      url:'https://github.com/Kamran-007-lab/RAY'
    },
    {
      id: 5,
      src: movie,
      value: 'Movie Catalogue',
      url:'https://github.com/Kamran-007-lab/Movies-Catalogue'
    },
  ];

  return (
    <div
      id="projects"
      
      className="bg-gradient-to-b from-gray-300 via-white to-gray-300  w-full text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-xl">Check out some of my work right here</p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, value, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={url}>
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-xl">
                  {value}
                </button>
                </a>
                
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
