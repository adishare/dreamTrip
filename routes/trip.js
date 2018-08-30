const Routes = require('express').Router()
const controller = require('../controller')

Routes.get('/', controller.Trip.list)
Routes.post('/add', controller.Trip.addTrip)

Routes.get('/:id/edit', controller.Trip.showEditTrip)
Routes.post('/:id/edit', controller.Trip.editTrip)
Routes.get('/:id/delete', controller.Trip.deleteTrip)

Routes.get('/:id', controller.Trip.tripDetail)

module.exports = Routes