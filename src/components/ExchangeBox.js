import React from "react";
import ExchangeBoxItem from "./ExchangeBoxItem";
import VerificationModal from "./VerificationModal";

export default class ExchangeBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  onIsOpenChange = e => {
    const isOpen = e.target.value;
    this.setState(() => ({ isOpen: true }));
    console.log(this.state);
  };

  handleClearIsOpenState = () => {
    this.setState(() => ({ isOpen: false }));
  };

  render() {
    return (
      <div className="exchange-box">
        <h2>Let's set up your transaction!</h2>
        <p>Specify the amount to be sent or received</p>
        <ExchangeBoxItem
          headertext="You sent"
          amount="2000"
          currency="EUR"
          type="send"
        />
        <ExchangeBoxItem
          headertext="Receiver gets"
          amount="1717.94"
          currency="GBP"
          type="receive"
        />
        <button className="button" onClick={this.onIsOpenChange}>
          Next
        </button>
        <VerificationModal
          isOpen={this.state.isOpen}
          handleClearIsOpenState={this.handleClearIsOpenState}
        />
      </div>
    );
  }
}
