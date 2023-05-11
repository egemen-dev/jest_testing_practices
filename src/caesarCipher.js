export default class CaesarCipher {
  constructor() {
    this.lowerCaseLetters = [..."abcdefghijklmnopqrstuvwxyz"];
    this.upperCaseLetters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  }

  cipher(word, shift) {
    this.newWord = [];

    word.split("").forEach((letter) => {
      let index = this.getIndex(letter);
      let indexValid = typeof index === "number";

      let newLetter = indexValid ? this.getShiftedLetter(shift, index, letter) : letter;

      this.newWord.push(newLetter);
    });

    return this.newWord.join("");
  }

  handleShiftValue(shiftVal) {
    if (shiftVal > 25) {
      return (shiftVal % 25) - 1;
    }

    if (shiftVal < -25) {
      return shiftVal % 25;
    }

    if (shiftVal < 0) {
      return 26 + shiftVal;
    }

    if (25 >= shiftVal >= 0) {
      return shiftVal;
    }
  }

  getIndex(letter) {
    if (this.lowerCaseLetters.includes(letter)) {
      return this.lowerCaseLetters.indexOf(letter);
    }

    if (this.upperCaseLetters.includes(letter)) {
      return this.upperCaseLetters.indexOf(letter);
    }
  }

  getShiftedLetter(shift, currentIndex, currentLetter) {
    let newIndex = this.handleShiftValue(currentIndex + shift);

    if (this.lowerCaseLetters.includes(currentLetter)) {
      return this.lowerCaseLetters[newIndex];
    }

    if (this.upperCaseLetters.includes(currentLetter)) {
      return this.upperCaseLetters[newIndex];
    }
  }
}
