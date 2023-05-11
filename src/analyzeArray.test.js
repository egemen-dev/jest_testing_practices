import AnalyzeArray from "./analyzeArray";

const aa = new AnalyzeArray();

test("Analyze array [1,8,3,4,2,6]", () => {
  expect(aa.analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyze array [2, 3, 5, 7, 11, 13, 17, 19]", () => {
  expect(aa.analyze([2, 3, 5, 7, 11, 13, 17, 19])).toEqual({
    average: 9,
    min: 2,
    max: 19,
    length: 8,
  });
});
