const express = require('express')
const Routes = require('./routes')
const path = require('path')
const app = express()
const bcrypt = require('bcrypt')
// const morgan = require('morgan');

const authentication = require("./helper/authentication.js");

var session = require('express-session')
var sess = {
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}

app.set('view engine', 'ejs')
// app.use(morgan('dev'))
app.use(session(sess));

app.get("/",function(req, res){
    let name = "dimas";
    req.session.user = {
        name:"Dimas",
        email:"alhusna901@gmail.com"
    };
    res.send(" session name sudah di set ");
     //console.log( req.session );
});

app.get("/dashboard",authentication,function(req,res){
    //res.send(" session name : "+ req.session.name );
    console.log("dashboard");
    console.log( req.session.user );
});

app.get("/login",function(req, res){
    console.log(" ini login ");
})

app.use(express.urlencoded({ extended : false }))
app.use(express.static(path.join(__dirname + '/public')))
app.use('/', Routes)
app.listen(3000, () => console.log('app listen in port 3000'))