// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];
//Event Listeners
eventListeners();

function eventListeners() {
  // Cuando se agrega un tweet
  formulario.addEventListener("submit", agregarTweet);

  //Cuando el documento carga
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || []; // Si no hay ningun elemento en el localStoragem, iguala tweets a un array vacio

    console.log(tweets);
    crearHTML();
  });
}

//Funciones
function agregarTweet(event) {
  event.preventDefault();

  //Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;
  //Validacion
  if (!tweet) {
    mostrarError("El tweet no puede estar vacio");
    return; //evita que se siga ejecutando
  }

  const tweetObj = {
    id: Date.now(),
    tweet, // = tweet = tweet
  };
  //Añadir al array de tweets
  tweets = [...tweets, tweetObj];

  // Crea el HTML
  crearHTML();

  // Reiniciar el formulario
  formulario.reset();
}

// Mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //Insertarlo en el div #Contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  //eliminarlo a los 3s
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

// Mostrar listado de los tweets
function crearHTML() {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Agregar un boton X
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.textContent = "X";

      //Agregar la funcion de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      //Crear HTML
      const li = document.createElement("li");
      //Agregar el texto
      li.innerText = tweet.tweet;
      //Agregar el boton
      li.appendChild(btnEliminar);
      //Insertar el li en el html
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

// Agrega los tweets actuales al localStorage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Eliminar un tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  // Recargamos el HTML con los nuevos tweets
  crearHTML();
}

// Limpiar HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
