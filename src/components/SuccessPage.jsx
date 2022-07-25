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
            <h1 className="font-bold text-5xl animate-pulse">Thank You!</h1>
            <p className="mt-3">
              Thank you for joining the waitlist{" "}
              {localStorage.getItem("Fullname")}. We would let you know as soon
              as we launch.
            </p>
            <p>Feel free to share an invite to anyone and show your love.</p>
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
