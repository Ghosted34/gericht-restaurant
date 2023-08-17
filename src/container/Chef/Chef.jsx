import React from "react";
import { chef, quote, sign } from "../../constants/images";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => {
  return (
    <section
      className="app__bg app__wrapper section_padding"
      title="Message From The Chef"
    >
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Words" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={quote} alt="Quotes" />
            <p className="p__opensans">
              Voluptate voluptate consequat esse occaecat occaecat exercitation
              labore ad voluptate esse.
            </p>
          </div>
          <p className="p__opensans">
            Consequat sunt ullamco sit magna exercitation exercitation aliquip.
            Proident ea ut laboris occaecat ea deserunt mollit ut elit irure.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef and Founder</p>
          <img src={sign} alt="Signature" />
        </div>
      </div>
    </section>
  );
};

export default Chef;
