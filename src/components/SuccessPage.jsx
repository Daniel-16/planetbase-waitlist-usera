import React from "react";
import Navbar from "./Navbar";
// import ThankYouImg from "../assets/images/thankYou.png";
import { RWebShare } from "react-web-share";

const SuccessPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-3">
        <div className="md:px-6 md:flex-row">
          <div className="flex-col px-3">
            <h1 className="font-bold text-5xl animate-pulse">
              Thank You, {localStorage.getItem("Fullname")}!
            </h1>
            <div className="mt-3">
              <p>
                My team and I are building a tool to help you make more money
                from your events by making it easy for brands to find and
                partner with you.
              </p>
              <br />
              <p>
                Sending out proposals only to get rejected? Never again! You
                won't deal with selfish gatekeepers or settle.
              </p>
              <br />
              <p>We're putting power in your hands.</p>
              <br />
              <p>
                {localStorage.getItem("Fullname")}, I will be in touch with you
                to help collect your valuable input and provide value to you
                from the get-go.
              </p>
              <br />
              <p>
                Lastly, please share the waitlist link with 2 of your event
                creator friends.
              </p>
              <RWebShare
                data={{
                  text: "Get Sponsors For Your Event. Join The Waitlist!",
                  url: "https://planetbase.netlify.app",
                  title: "Planetbase",
                }}
                onClick={() => console.log("Share button clicked")}
              >
                <button
                  className="px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: "#0D1B57" }}
                >
                  Send an Invite
                </button>
              </RWebShare>
              <br />
              <p className="pt-2 pb-2">Thank you again.</p>
              <p>
                Love, <br /> Jibola. <br />
                Team Lead.
              </p>
            </div>
          </div>
          {/* <img className="w-1/2" src={ThankYouImg} alt="Thank You" /> */}
        </div>
        {/* <div className=""> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SuccessPage;
