// Importar variables, funciones o clases de otros archivos
// El export default se pone fuera de las llaves y
// daria igual el nombre que le pongamos al importarlo
// Tambien se puede asignar alias en los imports: clientName as name
import newFunction, { clientName as name, saving, Client } from "./client.js";
import { Company } from "./company.js";

const client = new Client(name, saving);
console.log(client);
console.log(client.showInformation());
client.hasBalance();

const company = new Company("Microsoft", 5000, "Web Developing");
console.log(company);
console.log(company.showInformation());
company.hasBalance();

// Export Default
newFunction();

// 1) El Problema
// console.log(nombreCliente);

// 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas o también si decidimos implementar librerías...

// La solución es agrupar cada archivo en lo que se conoce como un IIFE (irse al otro archivo...)

// console.log(window.nombreCliente); Pondria las variables de manera global

// Para leer ese export utilizamos import
