import React, { useState } from "react";
import "../../CSS/contact.css";
import bgimg from "../images/bgimg1.jpg"

const Contact = () => {
  const [name, setname] = useState("");
  const [lastName, setLastname] = useState("");
  const [contact, setContact] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex w-screen h-screen justify-center items-center relative">
      <form
        action=""
        className=" flex justify-center items-center flex-col border-1 border-gray-200 shadow-md shadow-gray-500 rounded-xl py-12 px-12 bg-slate-200 bg-opacity-40"
      >
        <div className=" my-3 mx-5 ">
          <label htmlFor="">Name</label>
          <input
            className=" border-2 border-gray-400 rounded-xl placeholder:text-gray-600  placeholder:font-semibold mx-2 px-2"
            type="text"
            placeholder="Your First Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className=" border-2 border-gray-400 rounded-xl placeholder:text-gray-600  placeholder:font-semibold mx-2 px-2"
            type="text"
            placeholder="Your Last Name"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </div>
        <div className=" my-3 mx-5 ">
          <label htmlFor="">Contact</label>
          <input
            className=" border-2 border-gray-400 rounded-xl placeholder:text-gray-600  placeholder:font-semibold mx-2 px-2"
            type="number"
            placeholder="Your Phone Number"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
        <div className=" my-3 mx-5 ">
          <label htmlFor="">Email</label>
          <input
            className=" border-2 border-gray-400 rounded-xl placeholder:text-gray-600  placeholder:font-semibold mx-2 px-2"
            type="email"
            placeholder="Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className=" my-3 mx-5 ">
          <label htmlFor="">Message</label>
          <input
            className=" border-2 border-gray-400 rounded-xl placeholder:text-gray-600  placeholder:font-semibold mx-2 px-2"
            type="text"
            placeholder="Leave A Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button
          className=" py-2 px-5 bg-purple-500 rounded-full hover:bg-purple-700 hover:text-white hover:shadow-md transition ease-in-out"
          onClick={() => {
            console.log(name + lastName + contact + email + message);
          }}
        >
          {" "}
          Submit
        </button>
      </form>
      <img src={bgimg} alt="" className="absolute -z-10"/>
    </div>
  );
};

export default Contact;
