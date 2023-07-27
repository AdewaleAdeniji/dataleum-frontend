import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h3>
        Enter your phone <span className="text-agcademy-yellow">number </span>{" "}
        to get or buy Data{" "}
      </h3>

      <form className="sub-form">
        <input className="email-address" placeholder="PHONE NUMBER" />
        <button className="act-button">Get Started</button>
      </form>
    </div>
  );
};
export default Subscribe;
