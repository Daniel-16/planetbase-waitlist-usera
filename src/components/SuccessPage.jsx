import React from "react";
import Navbar from "./Navbar";
import ThankYouImg from "../assets/images/thankYou.png";
import { RWebShare } from "react-web-share";

const SuccessPage = () => {
  return (
    <div>
      <Navbar />
      <div className="conainer mx-auto mt-3">
        <div className="flex flex-col items-center md:px-6 md:flex-row">
          <div className="flex-col px-3">
            <h1 className="font-bold text-5xl animate-pulse">
              Thank You, {localStorage.getItem("Fullname")}!
            </h1>
            <p className="mt-3">
              My team and I are building a tool to help you make more money from
              your events by making it easy for brands to find and partner with
              you.
              <br />
              Sending out proposals to get rejected won't have to happen again.
              You won't have to deal with selfish gatekeepers, accept less, or
              compromise.
              <br />
              We're putting power in your hands.
              <br />
              {localStorage.getItem("Fullname")}, I will be in touch with you to
              help collect your valuable input and provide value to you from the
              get-go.
              <br />
              Lastly, please share the waitlist link with 2 of your event
              creator friends.
            </p>
            <div className="text-center">
              <RWebShare
                data={{
                  text: "Planetbase is launching soon. Join the waitlist so not to miss out",
                  url: "https://planetbase.netlify.app",
                  title: "Planetbase",
                }}
                onClick={() => console.log("Share button clicked")}
              >
                <button
                  className="px-4 py-2 text-white rounded-lg"
                  style={{ backgroundColor: "#0D1B57" }}
                >
                  Share an Invite
                </button>
              </RWebShare>
            </div>
          </div>
          <img className="w-1/2" src={ThankYouImg} alt="Thank You" />
        </div>
        {/* <div className=""> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SuccessPage;
