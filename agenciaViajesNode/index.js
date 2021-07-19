import express from "express";
import router from "./routes/index.js"
// Asignar ejecucion de express
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG (View Engine)
app.set('view engine', 'pug')

// middleware propio
// Obtener agno actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
})

// Definir public
app.use(express.static('public'));

// Agregar router
app.use('/', router);

// Arrancar servidor
app.listen(port, () => {
  console.log(`Port: ${port}`);
})