const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/pqrs')
         .then(db => console.log('bd conectado'))
         .catch(err=>console.error(err));

// setting
app.set('port',process.env.PORT || 3000);
// middleware
 app.use(morgan('dev'));
 app.use(express.json());
//static file
    app.use(express.static(__dirname +'/public'));
// routes
 app.use('/tasks', require('./routes/tasks'));  
 app.use('/api/pqrs', require('./routes/pqrs')); 
app.listen(3000, ()=>{
    console.log('servidor en el port ', app.get('port'));

});