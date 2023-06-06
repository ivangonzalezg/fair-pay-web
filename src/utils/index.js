import numbro from "numbro";

const formatToCurrency = (number = 0) =>
  numbro(number).format({
    thousandSeparated: true,
    prefix: "$",
    mantissa: 2,
  });

export { formatToCurrency };
