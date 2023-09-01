import React, { Component } from "react";
import TeamItem from "./TeamItem";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Team.css";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionHead: [
        {
          id: 1,
          mark: "اعضای تیم",
          title: "با تیم ما آشنا شوید",
          caption:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",
          captionClass: "section-heading__caption",
        },
      ],

      teamItems: [
        {
          id: 1,
          img: "./assets/images/Team/team-1.jpg",
          name: "ماتئوس فررو",
          job: "کارشناس بازاریابی",
        },
        {
          id: 2,
          img: "./assets/images/Team/team-2.jpg",
          name: "اوا هادسون",
          job: "توسعه دهنده بلاک چین",
        },
        {
          id: 3,
          img: "./assets/images/Team/team-3.jpg",
          name: "جکی سندرز",
          job: "طراح خلاق",
        },
        {
          id: 4,
          img: "./assets/images/Team/team-4.jpg",
          name: "جیمز اولسن",
          job: " کارشناس سئو",
        },
      ],
    };
  }

  render() {
    return (
      <section id="team" className="team">
        <div className="container">
          {this.state.sectionHead.map((heading) => (
            <SectionHeading key={heading.id} {...heading}></SectionHeading>
          ))}

          <div className="team-items">
            {this.state.teamItems.map((team) => (
              <TeamItem key={team.id} {...team}></TeamItem>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
