const Routes = require('express').Router()
const Controller  = require('../controller/controller')


Routes.get('/', (req,res)=> {
    res.render('homepage')
})


module.exports = Routes