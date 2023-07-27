import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Fade, Flip } from "react-reveal";
const DrivingUs = () => {
  return (
    <>
    <div className="driving-us">
      <Fade left>
      <img
        src={require("../../assets/driving-us.svg")}
        alt="what is driving us"
      />
      </Fade>
      <div className="driving-text">
        <h5>What’s Driving Us?</h5>
        <h6>Sensitizing Africa towards modern agriculture. Transforming Agric of culture to business through agribusiness consultancy, financing, branding, marketing,</h6>
        <div className="text-author">
          <Flip bounce>
          <button>Watch our Story <PlayCircleIcon /> </button>
          </Flip>
          <div>
            <h4>Umar Keefa</h4>
            <h6>CEO, Agcademy</h6>
          </div>
        </div>
      </div>
    </div>
    <div className="driving-m">
      <div className="m-d">
      <img
        src={require("../../assets/driving-us.svg")}
        alt="what is driving us"
      />
      <div className="driving-text">
        <div className="text-author">
          <button>Watch our Story <PlayCircleIcon /> </button>
          <div>
            <h4>Umar Keefa</h4>
            <h6>CEO, Agcademy</h6>
          </div>
        </div>
      </div>
      </div>
      <div className="driving-text m">
        <h5>What’s Driving Us?</h5>
        <h6>Sensitizing Africa towards modern agriculture. Transforming Agric of culture to business through agribusiness consultancy, financing, branding, marketing.</h6>
      </div>
    </div>
    
    </>
  );
};
export default DrivingUs;
