import numeral from "numeral";

export const fNumber = (number: string | number) => {
  return numeral(number).format();
};
