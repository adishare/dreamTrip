const express = require('express')
const Routes = require('./routes')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended : false }))
app.use(express.static(path.join(__dirname + '/public')))
app.use('/', Routes)

app.listen(3000, () => console.log('app listen in port 3000'))