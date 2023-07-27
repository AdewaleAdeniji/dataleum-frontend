import React, { useLayoutEffect } from "react";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect/dist/core";
import HeroImage from "../../assets/hero-here.svg";

const HeroSection = () => {
  useLayoutEffect(() => {
    new Typewriter("#typewriter", {
      strings: ["Buy", "Get", "Disburse"],
      autoStart: true,
      loop: true,
    });
  });
  return (
    <div className="hero-section">
      <Fade left bounce wobble>
        <div className="hero-side">
          <h1>
            <span id="typewriter"></span> Internet bundles
          </h1>
          <h5>
            Our platform offers a wide selection of data plans to suit every
            need and budget. Choose from various data packages from top
            providers, ensuring you always have the right amount of data to
            surf, stream, and connect with your loved ones.
          </h5>

          <div className="subscribe-form-area">
            <h5>Enter your phone number to get or buy Data</h5>
            <form className="subscribe-form">
              <input type="tel" placeholder="Phone Number" required />
              <button>Get Started</button>
            </form>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="hero-side responsive">
          <img src={HeroImage} alt="Hero " />
        </div>
      </Fade>
    </div>
  );
};
export default HeroSection;
