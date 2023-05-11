import CaesarCipher from "./caesarCipher";

const caesar = new CaesarCipher();

test("cipher a by 1", () => {
  expect(caesar.cipher("a", 1)).toEqual("b");
});

test("cipher a by 25", () => {
  expect(caesar.cipher("a", 25)).toEqual("z");
});

test("cipher a by 26", () => {
  expect(caesar.cipher("a", 26)).toEqual("a");
});

test("cipher A by 26", () => {
  expect(caesar.cipher("A", 26)).toEqual("A");
});

test("cipher a by 27", () => {
  expect(caesar.cipher("a", 27)).toEqual("b");
});

test("cipher a by 0", () => {
  expect(caesar.cipher("a", 0)).toEqual("a");
});

test("cipher a by -1", () => {
  expect(caesar.cipher("a", -1)).toEqual("z");
});

test("cipher a by -2", () => {
  expect(caesar.cipher("a", -2)).toEqual("y");
});

test("cipher u by -20", () => {
  expect(caesar.cipher("u", -20)).toEqual("a");
});

test("cipher a by 0", () => {
  expect(caesar.cipher("A", 20)).toEqual("U");
});

test("cipher hello by 1", () => {
  expect(caesar.cipher("hello", 1)).toEqual("ifmmp");
});

test("cipher hello by 25", () => {
  expect(caesar.cipher("hello", 25)).toEqual("gdkkn");
});

test("cipher hello! by 26", () => {
  expect(caesar.cipher("hello!", 26)).toEqual("hello!");
});

test("cipher THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG! by 23", () => {
  expect(caesar.cipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG!", 23)).toEqual(
    "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD!"
  );
});
