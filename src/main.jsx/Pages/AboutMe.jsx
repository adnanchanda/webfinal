import React from "react";
import bgimg from "../images/bgimg1.jpg"

const AboutMe = () => {
  return (
    <div className=" relative w-screen">
      <img src={bgimg} alt="" className=" h-auto w-cover flex absolute"/>
      <p class="abtme" className="flex relative text-purple-400 justify-center items-center p-72 text-justify">
        I'm Adnan, a frontend developer mastering React, with a foundation in
        HTML, CSS, and JavaScript. I pursued my education at Rosary High School,
        Trinity Polytechnic Pune for a diploma in Mechanical Engineering, and
        earned my B.E. in Mechanical Engineering from Sinhgad Academy of
        Engineering. Welcome to my portfolio, where I fuse engineering insights
        with web design expertise
      </p> 
      <div className=" absolute top-16 opacity-60  right-36  h-72 w-52 blur-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></div>
    </div>
  );
};

export default AboutMe;
