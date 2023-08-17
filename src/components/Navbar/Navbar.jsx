import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { gericht } from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={gericht} alt="GERICHT" />
      </div>

      <div className="app__navbar-links">
        <a href="#home" className="p__opensans">
          Home
        </a>
        <a href="#about" className="p__opensans">
          About
        </a>
        <a href="#menu" className="p__opensans">
          Menu
        </a>
        <a href="#awards" className="p__opensans">
          Awards
        </a>
        <a href="#contact" className="p__opensans">
          Contact
        </a>
      </div>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-small">
        <GiHamburgerMenu
          color="#fff"
          fontSize="27px"
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-small-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <div className="app__navbar-links-small">
              <a href="#home" className="p__opensans">
                Home
              </a>
              <a href="#about" className="p__opensans">
                About
              </a>
              <a href="#menu" className="p__opensans">
                Menu
              </a>
              <a href="#awards" className="p__opensans">
                Awards
              </a>
              <a href="#contact" className="p__opensans">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
