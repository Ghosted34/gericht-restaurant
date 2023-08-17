import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, NewsLetter } from "../../components";
import { gericht, spoon } from "../../constants/images";

import "./Footer.css";

const Footer = () => (
  <section className="app__footer section__padding" title="footer">
    <FooterOverlay />
    <NewsLetter />

    <div className="app__footer-links" style={{ zIndex: "2" }}>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, NewYork NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={gericht} alt="GERICHT" />
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <img
          src={spoon}
          alt="Spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright" style={{ zIndex: "2" }}>
      <p className="p__opensans">2022 GERICHT. All Rights Reserved</p>
    </div>
  </section>
);

export default Footer;
