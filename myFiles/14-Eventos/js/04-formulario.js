// Veamos los eventos para un formulario...

// Cuando envias un formulario usualmente lo que este en el action, es la página que se abre...

//

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // PreventDefault es evitar que el navegador realice la acción por default, en este caso ir al action...

  // Usualmente utilizaras preventDefault para validar el formulario antes de enviarlo a un servidor

  // Crear consultas Ajax entre otras cosas

  console.log("enviando...");

  // Mucha información valiosa en este e...
  console.log(e);

  console.log(e.target.method);
  console.log(e.target.action);
});
