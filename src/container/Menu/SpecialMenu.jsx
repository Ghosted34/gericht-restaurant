import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { cocktails, wines } from "../../constants/data";
import { menu } from "../../constants/images";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const title = "Menu That Fits Your Palate";
  return (
    <section
      className="app__specialMenu flex__center section__padding"
      id="menu"
      title="Menu"
    >
      <div className="app__specialMenu-title">
        <SubHeading title={title} />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine &amp; Beer</p>
          <div className="app__specialMenu-menu_items">
            {wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                tags={wine.tags}
                price={wine.price}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={menu} alt="Menu" />
        </div>

        <div className="app__specialMenu-menu_cocktail flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                tags={cocktail.tags}
                price={cocktail.price}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button className="custom__button">View More</button>
      </div>
    </section>
  );
};

export default SpecialMenu;
