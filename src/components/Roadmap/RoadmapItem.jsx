import React, { Component } from "react";

class RoadmapItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      title,
      text,
      shapeClass,
      circleClass,
      detailImg,
      detailTitle,
      detailPercent,
      isContent,
    } = this.props;
    return (
      <>
        {isContent ? (
          <div className="roadmap-item">
            <div className="roadmap-item__wrapper">
              <h4 className="roadmap-item__title">{title}</h4>
              <p className="roadmap-item__caption">{text}</p>
              <span className={`roadmap-items__shape ${shapeClass}`}></span>
              <span className={`roadmap-items__circle ${circleClass}`}></span>
              <a className="roadmap-item-link">
                <span className="roadmap-item__icon">
                  <img src={detailImg} alt="rodamap image" />
                </span>
                <span className="roadmap-item-link__title">{detailTitle}</span>
                <span className="roadmap-item-link__number">
                  {detailPercent}
                </span>
                <span className="roadmap-item-link__arrow">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                      fill="#60D16B"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ) : (
          <div className="roadmap-item roadmap-item--empty"></div>
        )}
      </>
    );
  }
}

export default RoadmapItem;
