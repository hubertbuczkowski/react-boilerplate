import React from "react";

export default class InputGroup extends React.Component {
  state = { values: [] };

  // unlock button if all digits are entered
  unlockButton = x => {
    if (x.join("").length === 6) {
      this.props.isFilled(true, x);
    } else {
      this.props.isFilled(false, x);
    }
  };

  //verify if value entered is digit and if value is entered, moves to next input.
  //if value is the same, focus dont change
  valueChange = x => {
    let values = this.props.values;
    let id = parseInt(x.target.id);
    let value = x.target.value;
    if (!isNaN(value) && value !== " " && value.length < 2) {
      values[id] = x.target.value;
      if (value !== "") {
        if (x.currentTarget.nextElementSibling) {
          x.currentTarget.nextElementSibling.focus();
        } else {
          x.currentTarget.blur();
        }
      }
    } else {
      x.target.value = "";
      values[id] = x.target.value;
    }
    this.unlockButton(values);
  };

  //generate input fields
  generateInputs = () => {
    let resp = [];
    for (let i = 0; i < 6; i++) {
      resp.push(
        <input
          autoFocus={i === 0}
          onChange={x => this.valueChange(x)}
          ref={i}
          id={i}
          value={this.props.values[i]}
          type="tel"
        />
      );
    }
    return resp;
  };

  render() {
    return <div>{this.generateInputs()}</div>;
  }
}

InputGroup.defaultProps = {
  error: "",
  values: ["", "", "", "", "", ""],
  isFilled: () => {
    console.log("missing ifFUll callback function passed");
  }
};
