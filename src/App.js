import React, { Component } from "react";
import Header from "./components/Header/Header";
import Ads from "./components/Ads/Ads";
import Features from "./components/Features/Features";
import Banner from "./components/Banner/Banner";
import Roadmap from "./components/Roadmap/Roadmap";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";
import Download from "./components/Download/Download";
import Questions from "./components/Questions/Questions";
import Weblog from "./components/Weblog/Weblog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themeWeb: false,
    };
  }

  // Is Theme Handler
  themeHandler(theme) {
    console.log(theme);

    this.setState({
      themeWeb: theme,
    });
  }

  render() {
    return (
      <div className={`${this.state.themeWeb === true ? "dark-theme" : ""}`}>
        <Header isTheme={this.themeHandler.bind(this)}></Header>

        <main className="main">
          <Ads />
          <Features />
          <Banner />
          <Roadmap />
          <Team />
          <Testimonial />
          <Download />
          <Questions />
          <Weblog />
          <Contact />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
