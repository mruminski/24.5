const assert = require("assert");
const calcStylePoints = require("./calcStylePoints");

describe("when we want to calc style points with calcStylePoints function", () => {
  it("should return style notes for non-repeat notes", () => {
    const actual = calcStylePoints([18, 19.5, 19, 17, 18.5]);

    const expected = 55.5;

    assert.equal(actual, expected);
  });

  it("should return style notes for repeat notes", () => {
    const actual = calcStylePoints([19.5, 19.5, 19.5, 19.5, 19.5]);

    const expected = 58.5;

    assert.equal(actual, expected);
  });

  it("should return style notes for non-numeric notes", () => {
    const actual = calcStylePoints(["18", 19.5, 19, "17", 18.5]);

    const expected = 55.5;

    assert.equal(actual, expected);
  });

  it("should return Stoch's 2nd round style notes", () => {
    const actual = calcStylePoints([19, 19.5, 19, 19, 19]);

    const expected = 57.0;

    assert.equal(actual, expected);
  });

  it("should return Hilde's 1st round style notes", () => {
    const actual = calcStylePoints([17.5, 17, 18, 18, 18]);

    const expected = 53.5;

    assert.equal(actual, expected);
  });

  it("should return Mietus's 1st round style notes", () => {
    const actual = calcStylePoints([17, 16.5, 16.5, 16.5, 16.5]);

    const expected = 49.5;

    assert.equal(actual, expected);
  });
});
