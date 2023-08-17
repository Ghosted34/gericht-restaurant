import React from "react";
import { knife, G, spoon } from "../../constants/images";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
      title="About Us"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={G} alt="G" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About us</h1>
          <img src={spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Voluptate incididunt laborum tempor sit magna ad dolor commodo est.
            Sint voluptate reprehenderit sint aute. Eiusmod ullamco consequat
            Lorem pariatur officia ea ea aliquip.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={knife} alt="Knife" />
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Voluptate incididunt laborum tempor sit magna ad dolor commodo est.
            Sint voluptate reprehenderit sint aute. Eiusmod ullamco consequat
            Lorem pariatur officia ea ea aliquip.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
