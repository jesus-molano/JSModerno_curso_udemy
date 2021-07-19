import express from "express";
const router = express.Router();

router.get('/', (request, response) => {
  response.render('inicio', {
    tituloPagina: "Inicio"
  })
})
router.get('/nosotros', (request, response) => {
  response.render('nosotros', {
    tituloPagina: "Nosotros"
  })
})
router.get('/viajes', (request, response) => {
  response.render('viajes', {
    tituloPagina: "Viajes"
  })
})
router.get('/testimoniales', (request, response) => {
  response.render('testimoniales', {
    tituloPagina: "Testimoniales"
  })
})

export default router;