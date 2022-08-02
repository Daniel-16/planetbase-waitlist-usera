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
            <h1 className="font-bold">
              Dear {localStorage.getItem("Fullname")},
            </h1>
            <div className="mt-3">
              <p>Thank you for showing interest in this tool.</p>
              <br />
              <p>
                Our tool will help {localStorage.getItem("CompanyName")}:
                <ol>
                  <li>1. Introduce your product to target users.</li>
                  <li>2. Create memorable and meaningful brand experience.</li>
                  <li>3. Increase customer loyalty.</li>
                </ol>
              </p>
              <br />
              <p>
                I will be in touch with you to ensure you get optimal value when
                the product launches.
              </p>
              <br />
              <p>Lastly, please share the waitlist with a CEO you know.</p>
              <RWebShare
                data={{
                  text: "The Future of Experiential Marketing",
                  url: "https://planetbase.netlify.app",
                  title: "Planetbase",
                }}
                onClick={() => console.log("Share button clicked")}
              >
                <button
                  className="px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: "#0D1B57" }}
                >
                  Tell A CEO
                </button>
              </RWebShare>
              <br />
              <p className="pt-2 pb-2">Cheers to day 1.</p>
              <p>
                Love, <br /> Daniel. <br />
                Senior Developer.
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
