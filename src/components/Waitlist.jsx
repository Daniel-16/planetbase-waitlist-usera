import React from "react";
import logo from "../assets/images/img-01.png";
import Form from "./Form";

const Waitlists = () => {
  return (
    <>
      <div className="container mt-5 mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="flex-col">
          <p className="font-bold text-2xl animate-bounce text-center">
            Coming Soon!
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            The Future of Experiential Marketing
          </h1>
          <p className="pt-3">
            Tell your story. Introduce your product. Build user loyalty.
          </p>
          <Form />
        </div>
        {/* <img className="md:max-w-md z-10 blur-lg" src={background} alt="blur" /> */}
        <img className="md:max-w-md" src={logo} alt="Waitlists" />
      </div>
      <p className="text-gray-400 text-center px-3"></p>
    </>
  );
};

export default Waitlists;
