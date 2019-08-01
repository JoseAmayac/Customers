const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

//Settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');

//app.engine('html',express)

//Importing routes
const customerRoutes = require('./routes/customer');
 

//Middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql,{
    host:'localhost',
    user:'tendero',
    password:'hola123',
    port:3306,
    database:'crudnodejsmysql'
},'single'))

app.use(express.urlencoded({extended: false}));

//Routes
app.use('/',customerRoutes);

//Static files 
app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.set('views',path.join(__dirname,'/views'));
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})