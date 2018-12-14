const calcDistancePoints = (distance, hillSize, kPoint) => {
  let initPoints = 0;
  let extraPoint = 0;

  if (hillSize === "normal" || hillSize === "large") {
    initPoints = 60;
  } else {
    initPoints = 120;
  }

  if (hillSize === "normal") extraPoint = 2;

  if (hillSize === "large") extraPoint = 1.8;

  if (hillSize === "flying") extraPoint = 1.2;

  const totalDistancePoints = initPoints + (distance - kPoint) * extraPoint;

  return totalDistancePoints;
};

module.exports = calcDistancePoints;
