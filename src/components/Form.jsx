import React, { useState } from "react";
import Axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    Axios.post("https://planetbase-waitlist.herokuapp.com/emailaddress", {
      email,
    })
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setError("");
        setTimeout(() => {
          setSuccess(false);
        }, 10000);
      })
      .catch((err) => {
        console.error(err);
        if (err.toString().includes("400")) {
          setError("Oops! It Seems like you have already entered your email.");
        }
        setTimeout(() => {
          setError("");
        }, 10000);
      });
    console.log(email);
  };
  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  return (
    <form className="py-6 container mx-auto" onSubmit={handleForm}>
      <input
        className="border pl-6 pr-32 py-3 rounded-full outline-none w-80"
        type="email"
        required
        placeholder="Enter your email"
        style={{ borderColor: "#0D1B57" }}
        onChange={handleInput}
      />
      <div className="relative max-w-fit" style={{ left: 206, bottom: 45 }}>
        <button
          className="px-3 py-2 rounded-full text-white"
          style={{ backgroundColor: "#0D1B57" }}
        >
          Join Waitlist
        </button>
      </div>
      <div
        className="bg-green-300 border border-green-500 p-6 rounded-lg"
        style={!success ? { display: "none" } : { display: "block" }}
      >
        <p>
          Thank you for joining the waitlist. We would notify you as soon as we
          launch
        </p>
      </div>
      <div
        className="bg-red-300 border border-red-500 p-6 rounded-lg"
        style={error === "" ? { display: "none" } : { display: "block" }}
      >
        <p>{error}</p>
      </div>
    </form>
  );
};

export default Form;
