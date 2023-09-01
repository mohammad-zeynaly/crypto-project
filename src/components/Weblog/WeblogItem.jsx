import React, { Component } from "react";
import "./Weblog.css";

class WeblogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { img, authorName, dateNum, title, caption } = this.props;
    return (
      <div className="weblog-item">
        <a href="#" className="weblog-item-pic">
          <img className="weblog-item__image" src={img} alt="" />
        </a>
        <div className="weblog-item__content">
          <div className="weblog-item__details">
            <h5 className="weblog-item-author">
              <span className="weblog-item-author__icon">
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <path d="M11.0001 3.66675C11.9725 3.66675 12.9052 4.05306 13.5928 4.74069C14.2804 5.42832 14.6667 6.36095 14.6667 7.33341C14.6667 8.30587 14.2804 9.2385 13.5928 9.92614C12.9052 10.6138 11.9725 11.0001 11.0001 11.0001C10.0276 11.0001 9.09499 10.6138 8.40736 9.92614C7.71972 9.2385 7.33341 8.30587 7.33341 7.33341C7.33341 6.36095 7.71972 5.42832 8.40736 4.74069C9.09499 4.05306 10.0276 3.66675 11.0001 3.66675ZM11.0001 12.8334C15.0517 12.8334 18.3334 14.4742 18.3334 16.5001V18.3334H3.66675V16.5001C3.66675 14.4742 6.94841 12.8334 11.0001 12.8334Z"></path>
                </svg>
              </span>
              <span className="weblog-item-author__name">{authorName}</span>
            </h5>
            <h5 className="weblog-item-date">
              <span className="weblog-item-date__icon">
                <svg
                  className="weblog-item-date__icon"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <path d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z"></path>
                </svg>
              </span>
              <span className="weblog-item-date__number">{dateNum}</span>
            </h5>
          </div>
          <a href="#" className="weblog-item-link">
            <h4 className="weblog-item-link__title">{title}</h4>
          </a>
          <p className="weblog-item__caption">{caption}</p>
        </div>
      </div>
    );
  }
}

export default WeblogItem;
