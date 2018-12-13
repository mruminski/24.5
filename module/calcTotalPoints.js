const calcDistancePoints = require("./calcDistancePoints");
const calcStylePoints = require("./calcStylePoints");

const calcTotalPoints = (
  distance,
  hillSize,
  kPoint,
  styleNotes,
  windFactor,
  gateFactor
) => {
  const distancePoints = calcDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calcStylePoints(styleNotes);

  const result = distancePoints + stylePoints + windFactor + gateFactor;

  return Math.round(result * 10) / 10;
};

module.exports = calcTotalPoints;
