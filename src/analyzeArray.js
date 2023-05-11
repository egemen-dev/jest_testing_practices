export default class AnalyzeArray {
  analyze(array) {
    this.array = array;

    return {
      average: this.getAverage(),
      min: Math.min(...this.array),
      max: Math.max(...this.array),
      length: this.array.length,
    };
  }

  getAverage() {
    let total = 0;

    this.array.forEach((element) => {
      total += element;
    });

    return parseInt(total / this.array.length);
  }
}
