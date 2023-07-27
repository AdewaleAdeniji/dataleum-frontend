/* eslint-disable */
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Zoom, Bounce } from "react-reveal";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/menu.svg";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="topnav desktop">
        <Link to="/">
          Dataleum
        </Link>
        <div className="nav-links">
          <ul>
          <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <a className="act-button">Keep me in touch</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-mobile mobile">
        <Bounce>
        <img
          src={MenuIcon}
          alt="Agcademy Menu Button"
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
              <Link to="/blogs">Blog</Link>
            </li>
              <li>
                <button className="act-button">Keep me in touch</button>
              </li>
            </ul>
          </div>
          <img
            src={require("../../assets/logo-white.svg")}
            alt="Agcademy Logo"
            className="nav-logo-float"
          />
        </div>
        </Zoom>
      )}
    </>
  );
};
export default NavBar;
