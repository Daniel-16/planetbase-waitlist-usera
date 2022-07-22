import React, { useEffect, useState } from "react";
import Axios from "axios";

const Routes = () => {
  const [userEmail, setUserEmail] = useState([""]);
  useEffect(() => {
    Axios.get("https://planetbase-waitlist.herokuapp.com/userdata")
      .then((res) => {
        console.log(res);
        setUserEmail(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container mx-auto text-center font-medium text-lg mt-3">
      {userEmail.map((user) => (
        <>
          <div
            className="bg-white border mb-3 border-gray-500 px-3 py-3 rounded-lg"
            key={user._id}
          >
            <p className="text-lg">
              {" "}
              Name:{" "}
              <span className="text-lg font-bold px-3">{user.fullname}</span>
            </p>
            <p className="text-lg">
              Email: <span className="text-lg font-bold">{user.email}</span>
            </p>
            <p className="text-lg">
              Phone Number:{" "}
              <span className="text-lg font-bold px-3">{user.number}</span>
            </p>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Routes;
