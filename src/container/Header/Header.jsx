import React from "react";
import { SubHeading } from "../../components";
import { welcome } from "../../constants/images";

import "./Header.css";

const Header = () => {
  const title = "Chase the new flavour";
  return (
    <header className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={title} />
        <h1 className="app__header-h1">The Key to Find Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Irure cupidatat minim est commodo velit proident officia veniam.
          Tempor magna anim ipsum officia sit anim. Sunt et incididunt aute
          labore in deserunt sunt nostrud quis eu.
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={welcome} alt="Welcome" />
      </div>
    </header>
  );
};

export default Header;
