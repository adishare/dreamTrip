const Model = require('../models')
const Trip = Model.Trip
const User = Model.User

class Controller {

    static filterTrip(req,res){
        return Trip.findAll({
            where : {
                location : req.body.filterLocation
            }
        })
        .then(data =>{
            res.render('dreamtrip',{err : null ,data :data})
            console.log(req.body)
        })
        .catch(err =>{
            res.send(err)  
        })
    }
    
    static list(req,res){
        return Trip.findAll()
        .then(data =>{
            res.render('dreamtrip',{err : null ,data :data})
            console.log(req.body)
        })
        .catch(err =>{
            res.send(err)  
        })
    }

    static addTrip(req,res){
        return Trip.create(req.body)
        .then(() => {
            res.redirect('/trip')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showEditTrip(req,res){
        return Trip.findById(req.params.id)
        .then(data => {
            res.render('editTrip',{err : null ,data :data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editTrip(req,res){
        return Trip.update(req.body,{
            where : {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect('/trip')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static deleteTrip(req,res){
        return Trip.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(data=>{
            res.redirect('/trip')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static tripDetail(req,res){
        return Trip.findById(req.params.id)
        .then(data => {
            // res.render('detailTrip',{err : null ,data :data})
            User.findAll()
            .then(users =>{
                res.render('detailTrip',{err : null ,data :data, users :users})  
            })


        })
        .catch(err=>{
            res.send(err)
        })
    }



}

module.exports = Controller