/* eslint-disable */
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Zoom, Bounce } from "react-reveal";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/menu.svg";
import WifiIcon from "../../assets/logos/Logo1.svg";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="topnav desktop">
        <Link to="/">
          <img src={WifiIcon} alt="Dataleum Logo" height={"20px"} className="logo-icon"/>
        </Link>
        <div className="nav-links">
          <ul>
            <li>
              {/* <Link to="/blogs">Blog</Link> */}
            </li>
            <li>
              {/* <a className="act-button">Keep me in touch</a> */}
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-mobile mobile">
      <img src={WifiIcon} alt="Dataleum Logo" height={"10px"}/>
        <Bounce>
          <img
            src={MenuIcon}
            alt=" Menu Button"
            onClick={() => setOpen(true)}
          />
        
        </Bounce>
      </div>
      {open && (
        <Zoom>
          <div className="nav-overlay">
            <button className="closenav" onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
            <div className="nav-content">
              <ul>
                <li>
                  {/* <Link to="/blogs">Blog</Link> */}
                </li>
                <li>
                  {/* <button className="act-button">Keep me in touch</button> */}
                </li>
              </ul>
            </div>
            <img src={WifiIcon} alt="Dataleum Logo" height={"10px"}/>
          </div>
        </Zoom>
      )}
    </>
  );
};
export default NavBar;
