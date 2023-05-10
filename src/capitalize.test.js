const capitalize = require("./capitalize");

test("capitalize the string", () => {
  expect(capitalize("test")).toEqual("Test");
});
