class Keypad {
  constructor(document, logicCalculator) {
    this.uiCalculator = document.querySelector(".calculator");
    this.current = document.querySelector(".output-current");
    this.last = document.querySelector(".output-last");
    this.clearButton = document
      .querySelector("#clear")
      .addEventListener("click", (e) => {
        this.isFirst = true;
        this.result = 0;
        this.justOperated = false;
        this.lastOperator = "";
        this.curOperator = "";
        this.current.textContent = "";
        this.last.textContent = "";
      });
    this.deleteButton = document
      .querySelector("#delete")
      .addEventListener("click", (e) => {
        this.current.textContent = this.current.textContent.slice(
          0,
          this.current.textContent.length - 1
        );
      });
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
    this.logicCalculator = logicCalculator;
    this.operations = ["+", "-", "×", "÷", "="];
    this.isFirst = true;
    this.result = 0;
    this.justOperated = false;
    this.lastOperator = "";
    this.curOperator = "";
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
        button.self = this;
        button.addEventListener("click", this.storeValueOfKey);
        row.appendChild(button);
        i++;
      }
      this.uiCalculator.appendChild(row);
    }
  }

  storeValueOfKey(e) {
    if (this.self.operations.includes(this.textContent)) {
      this.self.operate(e, this.textContent);
      this.self.justOperated = true;
      return;
    }
    if (this.self.justOperated) {
      this.self.current.textContent = "";
      this.self.justOperated = false;
    }
    this.self.current.textContent += this.textContent;
  }

  operate(e, operator) {
    if (this.justOperated && this.lastOperator != "=") {
      return;
    }
    this.lastOperator = operator;
    if (operator == "=") {
      this.result = this.logicCalculator.operate(
        this.curOperator,
        this.result,
        this.current.textContent
      );
      this.last.textContent += ` ${this.current.textContent} ${operator}`;
      this.current.textContent = this.result;
      this.isFirst = true;
      return;
    }
    if (this.isFirst) {
      this.last.textContent = ` ${this.current.textContent} ${operator}`;
      this.isFirst = false;
      this.result = parseInt(this.current.textContent);
      this.curOperator = operator;
      return;
    }
    this.result = this.logicCalculator.operate(
      this.curOperator,
      this.result,
      this.current.textContent
    );
    this.curOperator = operator;

    this.last.textContent = ` ${this.result} ${operator}`;
    this.current.textContent = this.result;
  }
}

export default Keypad;
