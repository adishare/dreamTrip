const express = require('express')
const Routes = require('./routes')
const path = require('path')
const app = express()
const bcrypt = require('bcrypt')
//const authentication = require("./helper/authentication.js");

app.set('view engine', 'ejs')

var session = require('express-session')
app.use(session({
    key: 'username',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))

// app.get("/",function(req, res){
//     let name = "dimas";
//     req.session.user = {
//         name:"Dimas",
//         email:"alhusna901@gmail.com"
//     };
//     res.send(" session name sudah di set ");
// });

/* app.get("/trip",authentication,function(req,res){
    res.redirect('/trip')
});*/

app.get("/login",function(req, res){
    res.render('login')
})
app.post("/login",function(req, res){
    req.session.user = {
        username: req.body.username,
        password: req.body.password
    };
    res.redirect('/trip')
})


app.use(express.urlencoded({ extended : false }))
app.use(express.static(path.join(__dirname + '/public')))
app.use('/', Routes)
app.listen(3000, () => console.log('app listen in port 3000'))