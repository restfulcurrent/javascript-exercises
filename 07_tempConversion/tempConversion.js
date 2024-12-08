const convertToCelsius = function(tempCelcius) {
  const CONVERSION_OFFSET = 32;
  const CONVERSION_FACTOR = 5 / 9;

  const tempFarenheight = (tempCelcius - CONVERSION_OFFSET) * CONVERSION_FACTOR;
  
  // Round to one decimal placee
  return Math.round(tempFarenheight * 10) / 10;
};

const convertToFahrenheit = function(tempFarenheight) {
  const CONVERSION_OFFSET = 32;
  const CONVERSION_FACTOR = 9 / 5;

  const tempCelcius = (tempFarenheight  * CONVERSION_FACTOR + CONVERSION_OFFSET);

  // Round to one decimal placee
  return Math.round(tempCelcius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
