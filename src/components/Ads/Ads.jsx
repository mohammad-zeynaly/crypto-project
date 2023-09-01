import React, { Component } from "react";
import AdsItem from "./AdsItem";
import "./Ads.css";

class Ads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adsItems: [
        {
          id: 1,
          imgSrc1: "./assets/images/Ads/uideck.svg",
          imgSrc2: "./assets/images/Ads/uideck-white.svg",
        },
        {
          id: 2,
          imgSrc1: "./assets/images/Ads/TailGrids.svg",
          imgSrc2: "./assets/images/Ads/TailGrids-white.svg",
        },
        {
          id: 3,
          imgSrc1: "./assets/images/Ads/LineIcons.svg",
          imgSrc2: "./assets/images/Ads/LineIcons-white.svg",
        },
        {
          id: 4,
          imgSrc1: "./assets/images/Ads/AyroUI.svg",
          imgSrc2: "./assets/images/Ads/AyroUI-white.svg",
        },
        {
          id: 5,
          imgSrc1: "./assets/images/Ads/PlainAdmin.svg",
          imgSrc2: "./assets/images/Ads/PlainAdmin-white.svg",
        },
      ],
    };
  }

  render() {
    return (
      <section id="ads" className="ads">
        <div className="container">
          <h2 className="ads__title">
            به بیش از 20000 شرکت استفاده از پلتفرم ما بپیوندید
          </h2>
          <div className="ads-items">
            {this.state.adsItems.map((item) => (
              <AdsItem key={item.id} {...item}></AdsItem>
            ))}
          </div>
          <hr />
        </div>
      </section>
    );
  }
}

export default Ads;
