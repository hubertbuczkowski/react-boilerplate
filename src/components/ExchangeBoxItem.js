import React from "react";
import { formatCurrency, currencyImg } from "../actions/currency";

const ExchangeBoxItem = ({ headertext, amount, currency, type }) => {
  const formattedCurrency = formatCurrency(amount, currency);

  const currencyFlag = currencyImg(currency);

  return (
    <div
      className={
        type === "send"
          ? "exchange-box__item sender-box"
          : "exchange-box__item receiver-box"
      }
    >
      <div className="amount">
        <h3>{headertext}</h3>
        <div>{formattedCurrency}</div>
      </div>
      <div className="currency">
        {currencyFlag}
        {currency}
      </div>
    </div>
  );
};

export default ExchangeBoxItem;
