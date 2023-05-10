const reverseString = require("./reverseString");

test("reverse the given string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("reverse the given string", () => {
  expect(reverseString("AAA")).toEqual("AAA");
});

test("reverse the given string", () => {
  expect(reverseString("Test")).toEqual("tseT");
});

test("reverse the given string", () => {
  expect(reverseString("abc d")).toEqual("d cba");
});
