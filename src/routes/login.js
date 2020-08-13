const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  //Al recibir solicitud con el metodo get a la ruta principal "/"
  // res.send('Hello world'); // Envia un string
  res.json({ Title: "Hello World" }); // Envía un json
});

router.post("/", (req, res) => {
    const {number} = req.body; //Obtener información del archivo json
    //Validar que los datos existan
    console.log(number)
    if(number ==  7865470213){
        res.send(true);
    } else {
        res.send(false);
    }
});

module.exports = router;