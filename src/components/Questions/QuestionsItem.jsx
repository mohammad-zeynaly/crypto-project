import React, { Component } from "react";
import "./Questions.css";

class QuestionsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isQuestionsBox: false,
    };
  }

  // Show Description Questions Box
  questionsItemHandler(event) {
    const changeQuestionsBox = (this.state.isQuestionsBox =
      !this.state.isQuestionsBox);

    this.setState({
      isQuestionsBox: changeQuestionsBox,
    });
  }

  render() {
    let { title, caption } = this.props;
    return (
      <div className="questions-item">
        <button
          onClick={this.questionsItemHandler.bind(this)}
          className={`questions-item__btn ${
            this.state.isQuestionsBox ? "questions-item__box--open" : ""
          }`}
        >
          <h4 className="questions-item__title">{title}</h4>
          <span className="questions-item__icon">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_50_132)">
                <path
                  d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_50_132">
                  <rect
                    width="10"
                    height="10"
                    fill="white"
                    transform="translate(-0.000488281 0.000488281)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
        <p
          className={`questions-item__description ${
            this.state.isQuestionsBox ? "questions-item__description--open" : ""
          }`}
        >
          {caption}
        </p>
      </div>
    );
  }
}

export default QuestionsItem;
