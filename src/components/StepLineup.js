import React from "react";

import StepLineupItem from "./StepLineupItem";
const StepLineup = props => (
  <div className="step-lineup-container">
    <StepLineupItem
      stepnumber="Step 1"
      description="Transaction info"
      isFocussed
    />
    <StepLineupItem stepnumber="Step 2" description="Recipent info" />
    <StepLineupItem stepnumber="Step 3" description="Make payment" />
  </div>
);

export default StepLineup;
