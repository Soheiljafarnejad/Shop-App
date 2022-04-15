const numberFormat = (value) => {
  const number = new Intl.NumberFormat("en-US", {
    currency: "IRR",
  });
  return number.format(value);
};

export default numberFormat;
