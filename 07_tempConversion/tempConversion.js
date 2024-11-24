const convertToCelsius = function(temperature) {
  let newTemperature = Number((((temperature - 32) * (5/9))).toFixed(1));
  return newTemperature;
};

const convertToFahrenheit = function(temperature) {
  let newTemperature = Number(((temperature * (9/5) + 32)).toFixed(1));
  return newTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
