import React from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export default class DetailsBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="details-box">
        <div className="details-box__sending-details">
          <div className="details-box__header">Sending details</div>
          <div className="details-box__body">
            <div className="details-box__item">
              <span className="label">You send</span>
              <span className="content">2000</span>
            </div>
          </div>
        </div>
        <div className="details-box__receiving-details">
          <div className="details-box__header">Receiving details</div>
          <div className="details-box__body">
            <div className="details-box__item">
              <span className="label">Rate</span>
              <span className="content">0.86022</span>
            </div>
            <div className="details-box__item">
              <span className="label">Fee</span>
              <span className="content">$2.50</span>
            </div>
            <div className="details-box__item">
              <span className="label">Delivery date</span>
              <span className="content">25 th November</span>
            </div>
            <div className="details-box__item">
              <span className="label">Recipent gets</span>
              <span className="content">1,717.94</span>
            </div>
          </div>
        </div>
        <div className="details-box__footer">
          You save $66.19 compared your bank!
        </div>
      </div>
    );
  }
}
