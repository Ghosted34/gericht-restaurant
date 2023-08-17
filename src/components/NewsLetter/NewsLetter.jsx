import React from "react";
import { SubHeading } from "../../components";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="app__newsLetter">
      <div className="app__newsLetter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And Never Miss Latest Updates</p>
      </div>
      <div className="app__newsLetter-input flex__center">
        <input type="email" placeholder="Enter Your Email Address" />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
