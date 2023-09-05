import React from 'react'
import linkedinlogo from "../images/linkedin.png";
import twitterlogo from "../images/twitter.png";


const Projectspics = (props) => {
  return (
    <div>
        <a href={props.link}>
          <img src={props.icon} className="h-10 m-20 bg-white" />
        </a>
    </div>
  )
}

export default Projectspics