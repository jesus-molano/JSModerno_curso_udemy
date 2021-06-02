// Importar de la Clase cliente en client.js
import { Client } from "./client.js";

// Heredar de la clase Cliente y exportar a app.js
export class Company extends Client {
  constructor(name, saving, category) {
    super(name, saving);
    this.category = category;
  }

  showInformation() {
    return `Client: ${this.name} - Saving: ${this.saving} - Category: ${this.category}`;
  }
}
