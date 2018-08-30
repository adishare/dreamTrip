const Model = require('../models')
const User = Model.User

class Controller {
    static createUser(req, res){
        User.create(req.body)
        .then(() => {
            res.redirect('/login')
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static loginUser(req,res){
        User.findOne({
            where : {
                username : req.body.username,
                password : req.body.password
            }
        })
        .then(showUser => {
            res.render('homepage', {showUser})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller