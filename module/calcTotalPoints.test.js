const assert = require("assert");
const calcTotalPoints = require("./calcTotalPoints");

describe("when we want to calc total points with calcTotalPoints function", () => {
  it("should return total result Severin Freund", () => {
    const actual = calcTotalPoints(
      227.5,
      "flying",
      200,
      [18, 18.5, 17.5, 18.5, 18.5],
      -8.4,
      8.7
    );

    const expexted = 208.3;

    assert.equal(actual, expexted);
  });

  it("should return total result for Maciej Kot", () => {
    const actual = calcTotalPoints(
      99,
      "normal",
      98,
      [18, 17.5, 17.5, 17.5, 18],
      -8.6,
      3.2
    );

    const expexted = 109.6;

    assert.equal(actual, expexted);
  });

  it("should return total result for Kamil Stoch", () => {
    const actual = calcTotalPoints(
      134,
      "large",
      120,
      [19, 20, 19.5, 19, 18.5],
      -5.4,
      0
    );

    const expexted = 137.3;

    assert.equal(actual, expexted);
  });
});
