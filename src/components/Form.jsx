import React, { useState } from "react";
import Axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    Axios.post("https://planetbase-waitlist.herokuapp.com/user", {
      fullname,
      number,
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
          setError(
            "Oops! An error has occured. Check your details and try again."
          );
        }
        setTimeout(() => {
          setError("");
        }, 10000);
      });
    console.log(email);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFullname = (e) => {
    setFullname(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  return (
    <form className="py-6 container mx-auto space-y-3" onSubmit={handleForm}>
      <input
        className="border px-4 py-3 rounded-lg outline-none w-80 md:mr-3"
        type="text"
        required
        placeholder="Enter your fullname"
        style={{ borderColor: "#0D1B57" }}
        onChange={handleFullname}
      />
      <input
        className="border px-4 py-3 rounded-lg outline-none w-80"
        type="text"
        required
        placeholder="Enter your phone number"
        style={{ borderColor: "#0D1B57" }}
        onChange={handleNumber}
      />
      <input
        className="border px-4 py-3 rounded-lg outline-none w-80"
        type="email"
        required
        placeholder="Enter your email"
        style={{ borderColor: "#0D1B57" }}
        onChange={handleEmail}
      />
      <button
        type="submit"
        className="py-3 rounded-lg px-4 text-white md:ml-3"
        style={{ backgroundColor: "#0D1B57" }}
      >
        Join Waitlist
      </button>
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
