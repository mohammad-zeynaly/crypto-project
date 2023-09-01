import React, { Component } from "react";
import RoadmapItem from "./RoadmapItem";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Roadmap.css";

class Roadmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionHead: [
        {
          id: 1,
          mark: "نقشه راه",
          title: "تایم لاین",
          caption:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",
          captionClass: "section-heading__caption",
        },
      ],

      roadmapItem: [
        {
          id: 1,
          title: "1 فرویدین، 1402",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",
          shapeClass: "roadmap-items__shape--left",
          circleClass: "roadmap-items__circle--left",
          detailImg: "./assets/images/Roadmap/roadmap-1.svg",
          detailTitle: "بیتکوین",
          detailPercent: "4.5%",
          isContent: true,
        },
        {
          id: 2,
          title: "",
          text: "",
          shapeClass: "",
          circleClass: "",
          detailImg: "",
          detailTitle: "",
          detailPercent: "",
          isContent: false,
        },
        {
          id: 3,
          title: "",
          text: "",
          shapeClass: "",
          circleClass: "",
          detailImg: "",
          detailTitle: "",
          detailPercent: "",
          isContent: false,
        },
        {
          id: 4,
          title: "2 فرویدین، 1402",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",
          shapeClass: "roadmap-items__shape--right",
          circleClass: "roadmap-items__circle--right",
          detailImg: "./assets/images/Roadmap/roadmap-2.svg",
          detailTitle: "اتریوم",
          detailPercent: "2.5%",
          isContent: true,
        },
        {
          id: 5,
          title: "3 فرویدین، 1402",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",
          shapeClass: "roadmap-items__shape--left",
          circleClass: "roadmap-items__circle--left",
          detailImg: "./assets/images/Roadmap/roadmap-3.svg",
          detailTitle: "چین لینک",
          detailPercent: "4.5%",
          isContent: true,
        },
        {
          id: 6,
          title: "",
          text: "",
          shapeClass: "",
          circleClass: "",
          detailImg: "",
          detailTitle: "",
          detailPercent: "",
          isContent: false,
        },
        {
          id: 7,
          title: "",
          text: "",
          shapeClass: "",
          circleClass: "",
          detailImg: "",
          detailTitle: "",
          detailPercent: "",
          isContent: false,
        },
        {
          id: 8,
          title: "4 فرویدین، 1402",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",
          shapeClass: "roadmap-items__shape--right",
          circleClass: "roadmap-items__circle--right",
          detailImg: "./assets/images/Roadmap/roadmap-4.svg",
          detailTitle: "پالیگان",
          detailPercent: "2.5%",
          isContent: true,
        },
      ],
    };
  }

  render() {
    return (
      <section id="roadmap" className="roadmap">
        <div className="container">
          {this.state.sectionHead.map((heading) => (
            <SectionHeading key={heading.id} {...heading}></SectionHeading>
          ))}

          <img
            className="roadmap__shape"
            src="./assets/images/Roadmap/roadmap-shape.svg"
            alt=""
          />
          <div className="roadmap-items">
            <span className="roadmap-items__line"></span>

            {this.state.roadmapItem.map((item) => (
              <RoadmapItem key={item.id} {...item}></RoadmapItem>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Roadmap;
