import React, { Component } from "react";

class FooterList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, text1, text2, text3, text4, text5 } = this.props;

    return (
      <ul className="footer-list">
        <h4 className="footer-list__title">{title}</h4>
        <li className="footer-list__item">
          <a href="#weblog" className="footer-list__link">
            {text1}
          </a>
        </li>
        <li className="footer-list__item">
          <a href="#roadmap" className="footer-list__link">
            {text2}
          </a>
        </li>
        <li className="footer-list__item">
          <a href="#" className="footer-list__link">
            {text3}
          </a>
        </li>
        <li className="footer-list__item">
          <a href="#footer" className="footer-list__link">
            {text4}
          </a>
        </li>
        <li className="footer-list__item">
          <a href="#footer" className="footer-list__link">
            {text5}
          </a>
        </li>
      </ul>
    );
  }
}

export default FooterList;
