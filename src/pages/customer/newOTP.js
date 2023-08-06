import { Button, Select, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";
import PageContainer from "../../components/layouts/PageContainer";
import { GetData, GetPhoneNumber } from "../../services/api";
import { convertPhoneToISO, getNetwork } from "../../utils";

const SetupOTP = () => {
  const { phone } = useParams();
  const toast = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [network, setNetwork] = useState("");
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const handleFormSubmit = async () => {
    if (otp.length !== 6) {
      return toast({
        title: `OTP is invalid`,
        status: "error",
        isClosable: true,
      });
    }
    setLoading(true);

    const sendApi = await GetData(
      convertPhoneToISO(phone),
      phoneNumber,
      otp,
      network
    );
    setLoading(false);
    if (sendApi.success) {
      // all good
      toast({
        title: "Data sent to you!",
        status: "success",
        isClosable: true,
      });
      setOTP("");
      setPhoneNumber("");
      getPhoneNumberDetails();
    } else {
      return toast({
        title: sendApi.message || "Error occured",
        status: "error",
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    toast({
      title: "An OTP has been sent to you, enter the OTP below.",
      status: "success",
      isClosable: true,
    });
    getPhoneNumberDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getPhoneNumberDetails = async () => {
    const phoneNo = convertPhoneToISO(phone);
    const results = await GetPhoneNumber(phoneNo);
    if (results.success) {
      setDetails(results);
    } else {
      return toast({
        title: results.message || "Error Occured",
        status: "error",
        isClosable: true,
      });
    }
  };
  const updatePhoneNumber = (phone) => {
    if (phone.length > 11) return;
    // find network here once the stuff is passed 5 digits
    if (phone.length > 4) {
      const network = getNetwork(phone);
      setNetwork(network);
    }
    return setPhoneNumber(phone);
  };
  const updateOTP = (phone) => {
    if (phone.length > 6) return;
    return setOTP(phone);
  };

  return (
    <PageContainer title="Dataleum">
      <div className="hero-section">
        <Fade left bounce wobble>
          <div className="hero-side">
            <div
              className="usecase-card"
              style={{
                width: "100%",
                minHeight: "fit-content",
              }}
            >
              <h4>Profile</h4>
              <hr></hr>
              <h6>Name: {details?.username}</h6>
              <h6>Weekly Quota left: {details?.allowedTimes}</h6>
              <h6>Weekly Quota left: {details?.allowedTimes}</h6>
              <h6>Last Bought: {details?.lastBought}</h6>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="hero-side responsive otp-page-container">
            <div className="subscribe-form-area otp-page-form">
              <h5>Enter OTP sent to your number</h5>

              <form className="subscribe-form otp-page">
                <input
                  type="tel"
                  value={otp}
                  placeholder="Enter OTP"
                  onChange={(e) => updateOTP(e.target.value)}
                  required
                />
                <br />
                <a
                  href="/"
                  style={{
                    fontSize: "12px",
                    marginTop: "5px",
                  }}
                >
                  Resend OTP
                </a>
                <br />
                <div
                  style={{
                    fontSize: "12px",
                    marginTop: "20px",
                  }}
                >
                  Phone number the data would be sent to
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  placeholder="Phone Number to be credited with data"
                  onChange={(e) => updatePhoneNumber(e.target.value)}
                  required
                />
                <br />
                <span
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Network
                </span>
                <Select
                  placeholder="Select option"
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                >
                  <option value="1">MTN NG</option>
                  <option value="2">AIRTEL NG</option>
                </Select>
                <br />
                <Button
                  style={{
                    background:
                      (loading || phoneNumber.length !== 11) && "grey",
                    marginTop: "20px",
                  }}
                  isLoading={loading}
                  disabled={loading || phoneNumber.length !== 11}
                  onClick={handleFormSubmit}
                >
                  {loading ? "Loading...." : "Proceed"}
                </Button>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </PageContainer>
  );
};
export default SetupOTP;
