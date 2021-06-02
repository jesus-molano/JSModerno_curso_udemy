// En este video estaremos viendo lo que son los arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, la sintaxis es más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions

const aprendiendo1 = function () {
  console.log("Aprendiendo JavaScript");
};

const aprendiendo2 = () => {
  console.log("Aprendiendo JavaScript");
};

// una linea no requiere llaves
const aprendiendo3 = () => console.log("Aprendiendo JavaScript");

// retornar un valor
const aprendiendo4 = () => "Aprendiendo JavaScript";

aprendiendo1();
aprendiendo2();
aprendiendo3();
console.log(aprendiendo4());
