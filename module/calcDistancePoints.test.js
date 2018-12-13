const assert = require("assert");
const calcDistancePoints = require("./calcDistancePoints");

describe("calcDistancePoints", () => {
  it("should return distance points for distance < K point", () => {
    const actual = calcDistancePoints(110.5, "large", 120);

    const expected = 42.9;

    assert.equal(actual, expected);
  });

  it("should return distance points for normal hill", () => {
    const actual = calcDistancePoints(106.5, "normal", 98);

    const expected = 77;

    assert.equal(actual, expected);
  });

  it("should return distance points for large hill", () => {
    const actual = calcDistancePoints(227.5, "flying", 200);

    const expected = 153;

    assert.equal(actual, expected);
  });

  it("should return distance point for flying hill", () => {
    const actual = calcDistancePoints(134, "large", 120);

    const expected = 85.2;

    assert.equal(actual, expected);
  });
});
