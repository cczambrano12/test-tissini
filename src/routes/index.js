//ROUTES
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  //Al recibir solicitud con el metodo get a la ruta principal "/"
  // res.send('Hello world'); // Envia un string
  res.json({ Title: "Hello World" }); // Envía un json
});

router.get("/test", (req, res) => {
  const data = {
    name: "Test",
  };
  res.json(data); // Envía un json
});

//Exporta el router con las nuevas rutas agregadas
module.exports = router;
