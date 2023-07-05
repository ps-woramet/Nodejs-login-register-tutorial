const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

// MongoDB Connection 
mongoose.connect('mongodb+srv://admin:password123456@cluster0.hqkw3js.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// Controllers
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')
const storeUserController = require('./controllers/storeUserController')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))
app.set('view engine', 'ejs')

app.get('/', indexController)
app.get('/login', loginController)
app.get('/register', registerController)
app.post('/user/register', storeUserController)

app.listen(4000, () =>{
    console.log("App listening on port 4000")
})