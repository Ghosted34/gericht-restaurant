import React from "react";

import { awards } from "../../constants/data";
import { laurels, logo } from "../../constants/images";
import { SubHeading } from "../../components";
import "./Laurels.css";

const Laurels = () => {
  const title = "Awards and Recogntion";

  const Award = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt={title} />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <section
      className="app__bg app__wrapper section__padding"
      id="award"
      title="Awards / Laurels"
    >
      <div className="app_laurels-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title={title} />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {awards.map((award) => (
            <Award award={award} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={laurels} alt="Laurels" />
      </div>
    </section>
  );
};

export default Laurels;
