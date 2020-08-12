const {Router} = require('express');
const router = Router();
const _ = require('underscore');

//Pedir datos del archivo que emula la base de datos
const users = require('../sample.json');


router.get('/',(req,res) => {
    res.json(users);
})

//Para recibir peticiones PUT o POST se requiere formulario HTML o JS, a falta de frontend emularlo con postman
router.post('/', (req,res) =>{
    const {name, lastname, email, age} = req.body; //Obtener información del archivo json
    //Validar que los datos existan
    if(name && lastname && email && age){
        const id = users.length + 1;
        const newUser = {id,...req.body}; //Passes all data from request to the new Object plus id
        users.push(newUser);
        res.json(users);
    } else {
        //Responde valor y estado de error (500)
        res.status(500).json('Wrong request data');
    }

    res.send('received');
})

//Actualizar item seleccionado con los valores recibidos
router.put('/:id', (req,res)=>{
    const { id } = req.params; //Leer parametros de la peticion
    const {name, lastname, email, age} = req.body; //Lee valores de la petición
    console.log(id)
    //console.log(name, lastname, email, age)
    //Validar que los datos existan
    if(name && lastname && email && age){
        _.each(users, (user,i) => {
            if (user.id == id){
                user.name = name;
                user.lastname = lastname;
                user.email = email;
                user.age = age;
            }
        }, this);
        res.json(users);
    } else {
        res.status(500).json('Wrong request data');
    }
})

//Concatenar la ruta con un id genérico "/:id" como parámetro
//Usar underscore module para manejar arreglo de json
router.delete('/:id', (req,res)=>{
    const { id } = req.params; //Leer parametros de la peticion
    //Use underscore method to loop through all the users using a callback function using each item and its index
    _.each(users, (user,i) => {
        if (user.id == id){
            users.splice(i,1);
        }
    },this);
    res.json(users);
})


module.exports = router;