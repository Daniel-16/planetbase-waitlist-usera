import React from "react";
import logo from "../assets/images/img-02.png";
import Form from "./Form";

const Waitlists = () => {
  return (
    <>
      <div className="container mt-5 mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
        <div className="flex-col text-center">
          <p className="font-bold text-xl animate-bounce text-center">
            Coming Soon!
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Get notified when we launch
          </h1>
          <p className="text-gray-600">
            Planetbase is soon to launch but we do not want you to miss out when
            we do.
            <br />
            Enter your email address so we notify you as soon as we launch.
          </p>
          <Form />
        </div>
        {/* <img className="md:max-w-md z-10 blur-lg" src={background} alt="blur" /> */}
        <img className="md:max-w-md" src={logo} alt="Waitlists" />
      </div>
    </>
  );
};

export default Waitlists;
