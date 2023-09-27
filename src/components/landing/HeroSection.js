import React, { useLayoutEffect, useState } from "react";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect/dist/core";
import HeroImage from "../../assets/hero-here.svg";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { SendOTP } from "../../services/api";
import { convertPhoneToISO } from "../../utils";

const HeroSection = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  useLayoutEffect(() => {
    new Typewriter("#typewriter", {
      strings: ["Buy", "Get", "Disburse"],
      autoStart: true,
      loop: true,
    });
  });
  const handleFormSubmit = async () => {
    if (phoneNumber.length !== 11) {
      return toast({
        title: `Phone Number is invalid`,
        status: "error",
        isClosable: true,
      });
    }
    setLoading(true);

    const sendApi = await SendOTP(convertPhoneToISO(phoneNumber));
    setLoading(false);
    if (sendApi.success) {
      // all good
      toast({
        title: "An OTP has been sent to you, enter the OTP below.",
        status: "success",
        isClosable: true,
      });
      console.log(sendApi)
      navigate(`${phoneNumber}/${sendApi.numberID}/otp-code`);
    } else {
      return toast({
        title: sendApi.message,
        status: "error",
        isClosable: true,
      });
    }
  };
  const updatePhoneNumber = (phone) => {
    if (phone.length > 11) return;
    return setPhoneNumber(phone);
  };

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
              <input
                type="tel"
                value={phoneNumber}
                placeholder="Enter phone number e.g 08107034669"
                onChange={(e) => updatePhoneNumber(e.target.value)}
                required
              />
              <button
                style={{
                  background: loading && "grey",
                }}
                isLoading={loading}
                disabled={loading || phoneNumber.length !== 11}
                onClick={handleFormSubmit}
              >
                {loading ? "Loading...." : "Proceed"}
              </button>
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
