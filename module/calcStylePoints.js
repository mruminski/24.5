const calcStylePoints = styleNotes => {
  const min = Math.min(...styleNotes);
  const max = Math.max(...styleNotes);

  const sum = styleNotes.reduce((a, b) => parseFloat(a) + parseFloat(b));
  return sum - min - max;
};

module.exports = calcStylePoints;
