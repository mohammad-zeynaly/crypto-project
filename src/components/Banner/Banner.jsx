import React, { Component } from "react";
import BannerDetail from "./BannerDetail";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionHead: [
        {
          id: 1,
          mark: "توکن",
          title: "فروش توکن",
          caption:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردی می باشد.",
          captionClass: "",
        },
      ],
      bannerDetails: [
        {
          id: 1,
          classDetail: "banner-details__shape--one",
          title: "73% سودآوری خالص",
        },
        {
          id: 2,
          classDetail: "banner-details__shape--two",
          title: "55% پاداش و فوند",
        },
        {
          id: 3,
          classDetail: "banner-details__shape--three",
          title: "38% سرمایه گذاری",
        },
        {
          id: 4,
          classDetail: "banner-details__shape--four",
          title: "20.93% موجودی کد هدیه ",
        },
      ],
    };
  }

  render() {
    return (
      <section id="banner" className="banner">
        <div className="container">
          <div className="banner__wrapper">
            <div className="banner-chart">
              <img
                className="banner-chart__image"
                src="./assets/images/token-cahart.svg"
                alt="token image"
              />
            </div>
            <div className="banner-content">
              {this.state.sectionHead.map((heading) => (
                <SectionHeading key={heading.id} {...heading}></SectionHeading>
              ))}

              <div className="banner-details">
                {this.state.bannerDetails.map((detailItem) => (
                  <BannerDetail
                    key={detailItem.id}
                    {...detailItem}
                  ></BannerDetail>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
