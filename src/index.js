const express = require('express');
const morgan = require('morgan');
// const mongoose = require('mongoose');
// let { MongoClient } = require('mongodb');
let conector = require('./server/conector.js');

conector.getConnection();

const app = express();


// const user = 'proyectos';
// const password = 'Misdatos1';
// const dataBase = 'Pizza_Mia';
// const cluster = 'cluster0';

/*let uri = `mongodb+srv://${user}:${password}@${cluster}.kxgwt.mongodb.net/${dataBase}?retryWrites=true&w=majority`;

exports.dbconfig = {
	uri: uri,
};*/

/*mongoose.connect(`mongodb+srv://${user}:${password}@${cluster}.kxgwt.mongodb.net/${dataBase}?retryWrites=true&w=majority`)
         .then(db => console.log('bd conectado'))
         .catch(err=>console.error(err));
         exports.dbconfig = {
            uri: uri,
        };*/

// MongoClient.connect(`mongodb+srv://${user}:${password}@${cluster}.kxgwt.mongodb.net/${dataBase}?retryWrites=true&w=majority`)
//         .then(db => console.log('bd conectado'))
//         .catch(err=>console.error(err));
        
// sett
app.set('port',process.env.PORT || 3000);


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  app.use(morgan('dev'));
//  app.use(express.json());
//static file
    app.use(express.static(__dirname +'/public'));
// routes
 app.use('/tasks', require('./routes/tasks'));  
 app.use('/api/pqrs', require('./routes/pqrs')); 
app.listen(3000, ()=>{
    console.log('servidor en el port ', app.get('port'));

});

