class Keypad {
  constructor(document) {
    this.calculator = document.querySelector(".calculator");
    this.keyMapping = [
      "7",
      "8",
      "9",
      "÷",
      "4",
      "5",
      "6",
      "×",
      "1",
      "2",
      "3",
      "-",
      ".",
      "0",
      "=",
      "+",
    ];
    this.buildKeypad();
  }
  buildKeypad() {
    let i = 0;
    let size = this.keyMapping.length;
    while (i < size) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let _ = 0; _ <= 3; _++) {
        const button = document.createElement("button");
        button.classList.add("key");
        button.textContent = this.keyMapping[i];
        row.appendChild(button);
        i++;
      }
      this.calculator.appendChild(row);
    }
  }
}

export default Keypad;
