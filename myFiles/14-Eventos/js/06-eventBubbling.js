// Event Bubling es cuando presionas en un evento, pero ese evento se propaga por muchos otros dando resultados inesperados

// tenemos diferentes cards, con información...
//  vamos a crear 3 selectores

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", (event) => {
  e.stopPropagation();
  console.log("click card");
});
infoDiv.addEventListener("click", (event) => {
  e.stopPropagation();
  console.log("click info");
});

titulo.addEventListener("click", (event) => {
  e.stopPropagation();
  console.log("click titulo");
});
