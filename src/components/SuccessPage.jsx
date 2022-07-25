import React from "react";
import Navbar from "./Navbar";
import ThankYouImg from "../assets/images/thankYou.png";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  WhatsappIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";

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
            <div className="text-center space-x-3">
              <EmailShareButton url="https://planetbase.netlify.app">
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
              <FacebookShareButton url="https://planetbase.netlify.app">
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton url="https://planetbase.netlify.app">
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <TelegramShareButton url="https://planetbase.netlify.app">
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>
              <LinkedinShareButton url="https://planetbase.netlify.app">
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
              <TwitterShareButton url="https://planetbase.netlify.app">
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
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
