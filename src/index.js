const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.set('port',process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES
// app.use(require('./routes/index'));
// app.use('/api/users',require('./routes/users')); 
// app.use('/api/todo',require('./routes/todo')); 
// app.use('/categorias',require('./routes/categorias')); 

//STATIC FILES
app.use(express.static(path.join(__dirname,'public')));

//STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}` ) 
})