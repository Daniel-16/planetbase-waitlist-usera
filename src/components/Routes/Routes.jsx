import React, { useEffect, useState } from "react";
import Axios from "axios";

const Routes = () => {
  const [userEmail, setUserEmail] = useState([""]);
  useEffect(() => {
    Axios.get("https://planetbase-waitlist.herokuapp.com/email")
      .then((res) => {
        console.log(res);
        setUserEmail(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container mx-auto text-center font-medium text-lg">
      <ul>
        {userEmail.map((email) => (
          <>
            <li className="py-3" key={email._id}>
              {email.email}
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Routes;
