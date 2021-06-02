// Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-mail");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners() {
  //Cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  //Campos del Formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  // Enviar email
  formulario.addEventListener("submit", enviarEmail);

  // Reinicia el formulario
  btnReset.addEventListener("click", resetearFormulario);
}

// Funciones

function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
  email.classList.remove("border-red-500", "border-green-500");
  asunto.classList.remove("border-red-500", "border-green-500");
  mensaje.classList.remove("border-red-500", "border-green-500");
}

function validarFormulario(event) {
  if (event.target.value.length > 0) {
    //elimina los errores
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }

    event.target.classList.remove(("border", "border-red-500"));
    event.target.classList.add(("border", "border-green-500"));
  } else {
    event.target.classList.remove(("border", "border-green-500"));
    event.target.classList.add(("border", "border-red-500"));

    mostrarError("Todos los campos son obligatorios");
  }

  if (event.target.type === "email") {
    if (er.test(event.target.value)) {
      //elimina los errores
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }

      event.target.classList.remove(("border", "border-red-500"));
      event.target.classList.add(("border", "border-green-500"));
    } else {
      event.target.classList.remove(("border", "border-green-500"));
      event.target.classList.add(("border", "border-red-500"));

      mostrarError("El email no es válido");
    }
  }

  if (er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  } else {
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mb-5",
    "text-center",
    "error"
  );

  // Mostrar el error solo una vez
  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.insertBefore(mensajeError, document.querySelector(".mb-10"));
  }
}

function enviarEmail(event) {
  event.preventDefault();

  //Mostrar el spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  // Despues de 3s ocultar el spinner y mostrar el mensaje
  setTimeout(() => {
    spinner.style.display = "none";
    const parrafo = document.createElement("p");
    parrafo.textContent = "El mensaje se envio correctamente";
    parrafo.classList.add(
      "text-center",
      "my-10",
      "p-2",
      "bg-green-500",
      "text-white",
      "font-bold"
    );
    formulario.insertBefore(parrafo, spinner);

    setTimeout(() => {
      parrafo.remove();
      resetearFormulario();
    }, 3000);
  }, 3000);
}

// Resetear formulario
function resetearFormulario() {
  formulario.reset();
  iniciarApp();
}
