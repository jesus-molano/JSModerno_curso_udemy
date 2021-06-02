// Exportamos variables
export const clientName = "Max";
export const saving = 200;

// Exportamos clases
export class Client {
  constructor(name, saving) {
    this.name = name;
    this.saving = saving;
  }

  showInformation() {
    return `Client: ${this.name} - Saving: ${this.saving}`;
  }

  hasBalance() {
    if (this.saving > 0) {
      console.log("You have money in your account.");
    } else {
      console.log("You dont have money in your account.");
    }
  }
}

// Export Default solo puede haber uno, y puede tener o no nombre.
export default function defaultFunction() {
  console.log("Esto es una funcion exportada por default");
}
