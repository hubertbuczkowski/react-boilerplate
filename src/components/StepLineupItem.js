import React from "react";

const StepLineupItem = ({ stepnumber, description, isFocussed }) => (
  <div className={"step-lineup-item " + (isFocussed ? "current-step" : "")}>
    <h3>{stepnumber}</h3>
    <p>{description}</p>
  </div>
);

export default StepLineupItem;
