class Calculator {
  constructor() {
    this.operationsMap = {
      "+": this.add,
      "-": this.substract,
      "×": this.multiply,
      "÷": this.divide,
    };
  }
  add(x, y) {
    return parseInt(x) + parseInt(y);
  }
  substract(x, y) {
    return parseInt(x) - parseInt(y);
  }
  multiply(x, y) {
    return parseInt(x) * parseInt(y);
  }
  divide(x, y) {
    return parseInt(x) / parseInt(y);
  }
  operate(operator, x, y) {
    return this.operationsMap[operator](x, y);
  }
}

export default Calculator;
