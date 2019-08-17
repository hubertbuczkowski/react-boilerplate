import React from "react";
import Modal from "react-modal";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import InputGroup from "./InputGroup";
import receivecodeImg from "./../../public/images/refresh-page-option.svg";
import receiveviacallImg from "./../../public/images/call-answer.svg";
import padlockImg from "./../../public/images/locked-padlock.svg";

export default class VerificationModal extends React.Component {
  constructor(props) {
    super(props);
  }

  submit() {
    this.verifyCode();
  }

  verifyCode() {
    this.setState({ loading: true });
    console.log("verification code is running");
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.isOpen}
        onRequestClose={this.props.handleClearIsOpenState}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal__header">
          <div className="modal__header__title_container">
            <SVG className="padlock-img" src={padlockImg} />
            <h3 className="modal__title">Identity verification required</h3>
          </div>
          <p>
            For your security, we ocassionally require you to verify your
            identity by entering a code sent to your mobile device.
          </p>
        </div>
        <div className="modal__body">
          <div className="modal__body__vefification-message">
            <p>
              Enter the code sent via SMS to
              <span className="prefix-number">+353</span>
              <span className="number">872251177</span>
            </p>
            <div className="modal__body__input-fields">
              <InputGroup
                error={this.props.error}
                values={this.props.values}
                isFilled={this.props.isFilled}
              />
            </div>

            <div className="modal__body__verification-links">
              <Link to={`/receive-a-new-code`}>
                {" "}
                <SVG className="receive-code-img" src={receivecodeImg} />
                Receive a new code
              </Link>

              <Link to={`/receive-code-via-call`}>
                <SVG
                  className="receive-code-via-call-img"
                  src={receiveviacallImg}
                />
                Receive code via call instead
              </Link>
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <div className="modal__footer__buttons">
            <button
              className="verify-identity"
              onClick={this.submit.bind(this)}
            >
              Verify Identity
            </button>
            <button
              className="back-button"
              onClick={this.props.handleClearIsOpenState}
            >
              Back
            </button>
          </div>
          <div className="modal__footer__links">
            <Link to={`/mobile-device-access`}>
              I can't access this mobile device
            </Link>
          </div>
        </div>
      </Modal>
    );
  }
}

VerificationModal.defaultProps = {
  data: [],
  error: "",
  values: [],
  ifFilled: () => console.log("Missing ifFull function")
};
