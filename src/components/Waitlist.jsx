import React from "react";
import logo from "../assets/images/img-02.png";
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
            Get Sponsors for your event
          </h1>
          <p className="text-gray-600 pt-3">
            No Gatekeepers. Goodbye to Rejection!
            <br />
            Fill in the form below to get notified as soon as we launch.
          </p>
          <Form />
        </div>
        {/* <img className="md:max-w-md z-10 blur-lg" src={background} alt="blur" /> */}
        <img className="md:max-w-md" src={logo} alt="Waitlists" />
      </div>
      <p className="text-gray-400 text-center px-3">
        Virtual Events include Instagram Lives, Twitter Spaces, YouTube Lives,
        Clubhouse Rooms and many more.
      </p>
    </>
  );
};

export default Waitlists;
