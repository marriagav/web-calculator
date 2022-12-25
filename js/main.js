import Calculator from "./Calculator.js";
import Keypad from "./Keypad.js";

const calculator = new Calculator();

console.log(calculator.operate("×", 5, 5));

const keyPad = new Keypad(document, calculator);
