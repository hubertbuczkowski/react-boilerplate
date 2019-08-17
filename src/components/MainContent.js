import React from "react";
import StepLineup from "./StepLineup";
import ExchangeBox from "./ExchangeBox";
import ExchangeBoxFooter from "./ExchangeBoxFooter";
const MainContent = () => (
  <div className="main-container">
    <div className="box-container">
      <StepLineup />
      <ExchangeBox />
      <ExchangeBoxFooter />
    </div>
  </div>
);

export default MainContent;
