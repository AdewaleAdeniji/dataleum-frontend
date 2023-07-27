import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Flip, Fade } from "react-reveal";
import CellWifiIcon from "@mui/icons-material/CellWifi";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-description">
        <div className="offer-desc">
          <div className="flex">
            <Fade cascade count={3}>
              <h4>
                Dataleum
                <br /> Empowering Connectivity
              </h4>
            </Fade>
            <Flip tada>
              <CellWifiIcon className="text-24" />
            </Flip>
          </div>
          <h6>
          We are committed to empowering you with the tools to stay connected and spread the gift of data to those who matter most. With our user-friendly interface, secure payment options, and transparent disbursement system, Dataleum is here to make your data journey smoother than ever before.
          </h6>
          <button className="act-button flex">
            Get Started <ArrowRightAltIcon />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Offer;
