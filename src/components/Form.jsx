import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [companyName, setCompanyName] = useState("");
  // const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    Axios.post("https://planetbase-waitlist-usera.herokuapp.com/user", {
      fullname,
      companyName,
      email,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("Fullname", fullname);
        localStorage.setItem("CompanyName", companyName);
        // setSuccess(true);
        setError("");
        // setTimeout(() => {
        //   setSuccess(false);
        // }, 10000);
        // window.open("/thankyou");
        return navigate("/thankyou");
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
        localStorage.clear();
      });
    console.log(email);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFullname = (e) => {
    setFullname(e.target.value);
  };
  return (
    <form className="py-6 container mx-auto space-y-3" onSubmit={handleForm}>
      <div className="flex flex-col">
        <small className="text-sm">
          Name <span className="text-red-700">*</span>
        </small>
        <input
          className="border px-4 py-3 rounded-lg outline-none w-80 md:mr-3"
          type="text"
          required
          placeholder="Enter your name"
          style={{ borderColor: "#0D1B57" }}
          onChange={handleFullname}
        />
      </div>
      {/* <br /> */}
      <div className="flex flex-col">
        <small className="text-sm">
          Company Name <span className="text-red-700">*</span>
        </small>
        <input
          className="border px-4 py-3 rounded-lg outline-none w-80"
          type="text"
          required
          placeholder="Enter the name of your company here"
          style={{ borderColor: "#0D1B57" }}
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <small className="text-sm">
          Email <span className="text-red-700">*</span>
        </small>
        <input
          className="border px-4 py-3 rounded-lg outline-none w-80"
          type="email"
          required
          placeholder="example@mail.com"
          style={{ borderColor: "#0D1B57" }}
          onChange={handleEmail}
        />
      </div>

      <div className="flex-col">
        <small
          className="text-red-500"
          style={error === "" ? { display: "none" } : { display: "block" }}
        >
          <p>{error}</p>
        </small>
        <button
          type="submit"
          className="py-3 rounded-lg px-4 text-white md:ml-3"
          style={{ backgroundColor: "#0D1B57" }}
        >
          Join The Waitlist
        </button>
      </div>
      {/* <small className="italic">
        Virtual Events include Instagram Lives, Twitter Spaces, YouTube Lives,
        Clubhouse Rooms and many more.
      </small> */}
      {/* <div
        className="bg-green-300 border border-green-500 p-6 rounded-lg"
        style={!success ? { display: "none" } : { display: "block" }}
      >
        <p>
          Thank you for joining the waitlist. We would notify you as soon as we
          launch
        </p>
      </div> */}
    </form>
  );
};

export default Form;
