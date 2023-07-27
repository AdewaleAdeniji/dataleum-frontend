import React from "react";
import BoltIcon from '@mui/icons-material/Bolt';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import SensorsIcon from '@mui/icons-material/Sensors';

const Features = () => {
  return (
    <div className="flex-desktop  features">
      <div className="single-feature">
        <div className="feature-image">
          <BoltIcon />
        </div>
        <div className="feature-details">
          <h3>Buy Data</h3>
          <p>
            Whether you need data for personal use or to assist friends, family,
            or colleagues, Dataleum has got you covered.
          </p>
        </div>
      </div>

      <div className="single-feature">
        <div className="feature-image">
          <CellWifiIcon />
        </div>
        <div className="feature-details">
          <h3>Stay Connected</h3>
          <p>
            Whether you need data for personal use or to assist friends, family,
            or colleagues, Dataleum has got you covered.
          </p>
        </div>
      </div>

      <div className="single-feature">
        <div className="feature-image">
          <SensorsIcon />
        </div>
        <div className="feature-details">
          <h3>Disburse Data</h3>
          <p>
            Create disbursal groups and add members by simply entering their
            phone numbers. Dataleum will take care of the rest.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
