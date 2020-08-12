const {Router} = require('express');
const router = Router();

//Pedir datos del archivo que emula la base de datos
const users = require('../sample.json');

router.get('/',(req,res) => {
    res.json(users);
})

module.exports = router;