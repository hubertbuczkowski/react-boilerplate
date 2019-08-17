import React from "react";
import numeral from "numeral";

export const formatCurrency = (amount, currency) => {
  //Here you can specify format of the amount
  const specifiedFormat = "0,000.00";

  switch (currency) {
    case "EUR":
      return "€ " + numeral(amount).format(specifiedFormat);
    case "GBP":
      return "£ " + numeral(amount).format(specifiedFormat);
    default:
      return undefined;
  }
};

//Function which returns the currency image by given currency value
export const currencyImg = currency => {
  switch (currency) {
    case "EUR":
      return <img src="/dist/images/currencies/eur.png" />;
    case "GBP":
      return <img src="/dist/images/currencies/gbp.png" />;
    default:
      return undefined;
  }
};
