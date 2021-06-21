// factory
const types = ["text", "button", "password"];
class InputHTML {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  createInput() {
    return `<input type="${this.type}" name="${this.name}" id="${this.name}" ></input>`;
  }
}

class HTMLFactory {
  createElement(type, name) {
    if (types.includes(type)) {
      return new InputHTML(type, name);
    }
  }
}

const element = new HTMLFactory();
const inputText = element.createElement("text", "client-name");
const inputBtn = element.createElement("button", "client-btn");
const inputPass = element.createElement("password", "client-pass");
console.log(inputText.createInput());
console.log(inputBtn.createInput());
console.log(inputPass.createInput());
