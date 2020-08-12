const {Router} = require('express');
const router = Router();

//Para consultar API externa 
const fetch = require('node-fetch');

//El método de consulta externo es asíncrono por lo que se requiere async aawait
router.get('/', async (req,res) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos'); //Peticion asincrona
    const todo = await response.json();
    //console.log(todo);
    res.send(todo);
});

module.exports = router;
