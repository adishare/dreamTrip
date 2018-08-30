const Routes = require('express').Router()
const trip =  require('./trip.js')

Routes.use('/trip',trip)

Routes.get('/',(req,res)=>{
    res.redirect('/trip')
})



module.exports = Routes