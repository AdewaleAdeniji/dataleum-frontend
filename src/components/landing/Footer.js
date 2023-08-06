/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Img from "../../assets/Sitting.svg";
import { CellWifi } from "@mui/icons-material";
import TwitterLogo from "../../assets/twitter.svg";
// import LinkedinLogo from "../../assets/linkedin.svg";
// import FacebookLogo from "../../assets/facebook.svg";
// import InstagramLogo from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="foot-links">
          <div className="mb-only">
            <h5>Dataleum</h5>
            <img src={Img} alt="Footer" />
          </div>
        </div>
        <div className="foot-links">
          <div className="desk-only">
            <h5>Dataleum</h5>
            <img src={Img} alt="Footer" />
          </div>
          {/* <div>
            <h6>Products</h6>
            <a>Courses</a>
            <a>Live Events</a>
            <a>Resource Kits</a>
            <a>Instructor Guides</a>
          </div> */}
          <div>
            {/* <h6>Company</h6>
            <a>About Us</a>
            <a>Our Culture</a>
            <a>FAQs</a>
            <a>Blog</a> */}
          </div>
        </div>
        <div className="foot-links-two">
          <h6>&copy; dataleum.co 2022</h6>
          {/* <a>Privacy Policy</a>
          <a>Terms of Use</a> */}
        </div>
      </div>
      <div className="footer-desc">
        <div className="img-footer">
          <CellWifi />
        </div>
        <p>Dataleum - Connecting Hearts, One Byte at a Time.</p>
        <div
          className="social-links"
          style={{
            display: "none",
          }}
        >
          <a
            className="twitter"
            href="https://twitter.com/dataleum_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterLogo} alt="Twitter social" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
