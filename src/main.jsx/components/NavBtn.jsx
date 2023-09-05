import React from "react";
import { Link } from "react-router-dom";

const NavBtn = (props) => {
  return (
    <div>
      <Link
        to={props.link}
        className="hover:text-purple-800 shadow-lg border border-gray-300 py-2 px-3 rounded-full"
      >
        {props.title }
      </Link>
    </div>
  );
};

export default NavBtn;
