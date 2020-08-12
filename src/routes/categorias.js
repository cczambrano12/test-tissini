const {Router} = require('express');
const router = Router();
const _ = require('underscore');


const users = require('../sample.json');

//Para consultar API externa 
const fetch = require('node-fetch');


//El método de consulta externo es asíncrono por lo que se requiere async aawait
router.get('/:id', async (req,res) =>{
    const response = await fetch('https://mitienda.moda/categorias'); //Peticion asincrona
    const { id } = req.params; //Leer parametros de la peticion
    //Use underscore method to loop through all the users using a callback function using each item and its index
    _.each(users, (user,i) => {
        if (user.id == id){
            users.splice(i,1);
        }
    },this);
    res.json(users);
});

module.exports = router;