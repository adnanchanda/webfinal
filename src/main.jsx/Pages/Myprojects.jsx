import React from "react";
import linkedinlogo from "../images/linkedin.png";
import instagramlogo from "../images/instagram.png";
import twitterlogo from "../images/twitter.png";
import facebooklogo from "../images/facebook.png";
import githublogo from "../images/github.png";
import stacklogo from "../images/stackoverflow.png";
import bgimg from "../images/bgimg1.jpg";
import Projectspics from "../components/Projectspics";

const Myprojects = () => {
  return (
    <div className="relative">
      <img src={bgimg} alt="" className="absolute -z-10" />
      <div className=" flex flex,col justify-evenly">
        <Projectspics link="https://www.linkedin.com/" icon={linkedinlogo} />
        <Projectspics link="https://www.instagram.com/" icon={instagramlogo} />
        <Projectspics link="https://twitter.com/" icon={twitterlogo} />
      </div>
      <div className=" flex flex,col justify-evenly">
        <Projectspics link="https://www.facebook.com/" icon={facebooklogo} />
        <Projectspics link="https://github.com/" icon={githublogo} />
      </div>
      <div className=" flex flex,col justify-evenly">
        <Projectspics link="https://stackoverflow.com/" icon={stacklogo} /> 
      </div>
    </div>
  );
};

export default Myprojects;
