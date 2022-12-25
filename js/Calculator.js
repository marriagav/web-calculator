class Calculator {
  constructor() {
    this.operationsMap = {
      "+": this.add,
      "-": this.substract,
      "*": this.multiply,
      "/": this.divide,
    };
  }
  add(x, y) {
    return x + y;
  }
  substract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return x / y;
  }
  operate(operator, x, y) {
    return this.operationsMap[operator](x, y);
  }
}

export default Calculator;
