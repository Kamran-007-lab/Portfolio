import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import k from "../assets/k.gif"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "technologies",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div id="over-flow" className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray fixed">
      <div className="pt-3">
        <h1 className="text-6xl hidden md:inline-block font-signature ml-2 text-black">Kamran</h1>
      </div>

      
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-black text-xl hover:scale-125 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      

      <Link to="home" smooth duration={500} className="md:hidden" ><div
        // onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={50} /> : <img src={k} className="h-16 w-16 rounded-full hover:scale-125 duration-200 z-10"/>}
      </div>
      </Link>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-300 via-white to-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-black"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

