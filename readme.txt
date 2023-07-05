0. .gitignore

    node_modules

1. setup a project

    1.1 ติดตั้ง package.json
        -terminal

        npm init -y

    1.2 ติดตั้ง dependencies

        npm i express nodemon express-session mongoose ejs connect-flash bcrypt

        1.3 แก้ไข script ใน package.json (npm run start จะทำการใช้ nodemon)

        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start" : "nodemon index.js"
        }

    1.4 สร้าง folders

        middleware
        models
        views
        controllers
        public -> css, --> js (ใช้เก็บ assets ต่างๆ)
        index.js

    1.5 สร้าง server ใน index.js จากนั้น (npm run start) เข้า website [localhost:4000]

        const express = require('express')
        const app = express()
        const ejs = require('ejs')
        const mongoose = require('mongoose')
        const expressSession = require('express-session')
        const flash = require('connect-flash')

        app.use(express.static('public'))
        app.use(express.json())
        app.use(express.urlencoded())
        app.use(flash())
        app.use(expressSession({
            secret: "node secret"
        }))
        app.set('view engine', 'ejs')

        app.listen(4000, () =>{
            console.log("App listening on port 4000")
        })

    1.6 สร้างหน้า indexPage
        1.6.1 ทำการสร้างไฟล์ views -> indexPage.ejs
            เข้าไปที่ view-source:https://getbootstrap.com/docs/5.0/examples/blog/  
            แล้ว copy code จาก website ไปวาง
            
            เนื่องจากไม่สามารถทำการเรียกที่อยู่ไฟล์ css เหมือนในเว็บไซต์ได้จึงต้องทำการนำ code css จาก website มาสู่เครื่องก่อน
            
            นำ css ของ bootstrap จาก https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css
            ไปวางใน public -> css -> bootstrap.min.css

            แก้ไขไฟล์ indexPage.ejs  
            <!-- Bootstrap core CSS -->
            <link href="/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

            นำ css ของ bootstrap จาก https://getbootstrap.com/docs/5.0/examples/blog/blog.css
            ไปวางใน public -> css -> blog.css

            แก้ไขไฟล์ indexPage.ejs
            <!-- Custom styles for this template -->
            <link href="/css/blog.css" rel="stylesheet">

            1.6.1.1 ทำการสร้างปุ่ม Sign In, Sign Up ใน views -> indexPage.ejs

                <a class="btn btn-sm btn-outline-secondary mx-3" href="/login">Sign In</a>
                <a class="btn btn-sm btn-success" href="/register">Sign Up</a>

        1.6.2 ทำการสร้างไฟล์ controller -> indexController.js

            module.exports = (req,res) => {
                res.render('indexPage')
            }

        1.6.3 ทำการสร้าง route ใน index.js

            const indexController = require('./controllers/indexController')
            app.get('/', indexController)

    1.7 สร้างหน้า loginPage.ejs
        1.7.1 ทำการสร้างไฟล์ views -> loginPage.ejs
            เข้าไปที่ view-source:https://getbootstrap.com/docs/5.0/examples/sign-in/
            แล้ว copy code จาก website ไปวาง
            
            เนื่องจากไม่สามารถทำการเรียกที่อยู่ไฟล์ css เหมือนในเว็บไซต์ได้จึงต้องทำการนำ code css จาก website มาสู่เครื่องก่อน
            
            นำ css ของ bootstrap จาก https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css
            ไปวางใน public -> css -> bootstrap.min.css

            แก้ไขไฟล์ loginPage.ejs  
            <!-- Bootstrap core CSS -->
            <link href="/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

            นำ css ของ bootstrap จาก https://getbootstrap.com/docs/5.0/examples/sign-in/signin.css
            ไปวางใน public -> css -> signin.css

            แก้ไขไฟล์ loginPage.ejs
            <!-- Custom styles for this template -->
            <link href="/css/signin.css" rel="stylesheet">

            1.7.1.1 ทำการลบ icon bootstrap ออก
                ลบ <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
            
            1.7.1.2 แก้ไขข้อความ please sign in เป็น Sign In
                <h1 class="h3 mb-3 fw-normal">Sign In</h1>
            
            1.7.1.3 แก้ไข input โดยการเพิ่มค่า name เป็น emailinput และ passwordinput
                <input type="email" name = "emailinput" class="form-control" id="floatingInput" placeholder="name@example.com">
                <input type="password" name = "passwordinput" class="form-control" id="floatingPassword" placeholder="Password">

            1.7.1.4 แก้ไข action ใน form
                  <form action="/user/login" method="POST">

        1.7.2 ทำการสร้างไฟล์ controller -> loginController.js

            module.exports = (req,res) => {
                res.render('loginPage')
            }

        1.7.3 ทำการสร้าง route ใน index.js

            const loginController = require('./controllers/loginController')
            app.get('/login', loginController)

    1.8 สร้างหน้า registerPage.ejs
        1.8.1 ทำการสร้างไฟล์ views -> registerPage.ejs
            เข้าไปที่ view-source:https://getbootstrap.com/docs/5.0/examples/sign-in/
            แล้ว copy code จาก website ไปวาง
            
            เนื่องจากไม่สามารถทำการเรียกที่อยู่ไฟล์ css เหมือนในเว็บไซต์ได้จึงต้องทำการนำ code css จาก website มาสู่เครื่องก่อน
            
            นำ css ของ bootstrap จาก https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css
            ไปวางใน public -> css -> bootstrap.min.css

            แก้ไขไฟล์ registernPage.ejs  
            <!-- Bootstrap core CSS -->
            <link href="/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

            นำ css ของ bootstrap จาก https://getbootstrap.com/docs/5.0/examples/sign-in/signin.css
            ไปวางใน public -> css -> signin.css

            แก้ไขไฟล์ registerPage.ejs
            <!-- Custom styles for this template -->
            <link href="/css/signin.css" rel="stylesheet">

            1.8.1.1 ทำการลบ icon bootstrap ออก
                ลบ <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
            
            1.8.1.2 แก้ไขข้อความเป็น Sign Up
                <title>SignUp Template · Bootstrap v5.0</title>
                <h1 class="h3 mb-3 fw-normal">Sign Un</h1>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
            
            1.8.1.3 แก้ไข input โดยการเพิ่มค่า name เป็น emailinput และ passwordinput
                <input type="email" name = "emailinput" class="form-control" id="floatingInput" placeholder="name@example.com">
                <input type="password" name = "passwordinput" class="form-control" id="floatingPassword" placeholder="Password">

            1.8.1.4 แก้ไข action ใน form
                <form action="/user/register" method="POST">
        
        1.8.2 ทำการสร้างไฟล์ controller -> registerController.js

            module.exports = (req,res) => {
                res.render('registerPage')
            }

        1.8.3 ทำการสร้าง route ใน index.js

            const registerController = require('./controllers/registerController')
            app.get('/register', registerController)

2. Registration System

    [storeUserController -> UserSchema](Controller -> Model)
    (storeUserController ตรวจสอบแล้ว ไม่มี error -> storeUserController ทำการสร้าง UserSchema และ redirect('/'))
    
    [storeUserController -> UserSchema](Controller -> Model)
    (UserSchema -> storeUserController ตรวจสอบแล้ว มี error -> storeUserController เก็บค่า errors และ ข้อมูล เพื่อนำไปแสดงบนหน้าเว็บ [req.flash('validationErrors', validationErrors) req.flash('data', req.body) และ redirect('/register')])
    
    [registerController -> registerPage](Controller -> Views)
    (registerController ทำการตรวจสอบชนิดของข้อมูลว่าว่างมั้ย -> registerPage.ejs (แสดง errors))

    2.1 สร้าง database
        login ไปที่ https://www.mongodb.com
        สร้าง organization และสร้าง project
        new project -> ตั้งชื่อ node login register -> create project
        build a database -> free -> aws -> singapore -> create
        ตั้ง Username : admin
        ตั้ง Password : password123456
        create user
        จากนั้น add my current ip address
        Finish and Close
        Go to database

        เมื่อสร้างเสร็จไปที่ connect -> drivers -> copy connection string
        mongodb+srv://admin:<password>@cluster0.hqkw3js.mongodb.net/?retryWrites=true&w=majority

    2.2 เชื่อมต่อ database ใน index.js

        // MongoDB Connection 
        mongoose.connect('mongodb+srv://admin:password123456@cluster0.hqkw3js.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true
        })
    
    2.3 ทำการ สร้าง UserSchema ใน models -> User.js

        const mongoose = require('mongoose')
        const Schema = mongoose.Schema
        const bcrypt = require('bcrypt')

        const UserSchema = new Schema({
            emailinput:{
                type: String,
                required: [true, 'Please provide email']
            },
            passwordinput:{
                type: String,
                required: [true, 'Please provide password']
            }
        })

        UserSchema.pre('save', function(next){
            const user = this
            bcrypt.hash(user.passwordinput, 10).then(hash => {
                user.passwordinput = hash
                next()
            }).catch(error => {
                console.error(error)
            })
        })

        const User = mongoose.model('User', UserSchema)
        module.exports = User

    2.4 สร้าง storeUserController.js หากไม่เจอ error จะสร้าง UserSchema จากการกรอก email และ password

       const User = require('../models/User')

        module.exports = (req, res) => {
            User.create(req.body).then(() => {
                console.log('User registered successfully!')
                res.redirect('/')
            }).catch((error) => {
                // console.log(error.errors)
                if (error) {
                    const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                    req.flash('validationErrors', validationErrors)
                    req.flash('data', req.body)
                    return res.redirect('/register')
                }
            })
        }
    
    2.5 สร้าง route ใน index.js

        const storeUserController = require('./controllers/storeUserController')
        app.post('/user/register', storeUserController)
    
    2.6 แก้ไข controller -> registerController.js

        module.exports = (req,res) =>{
    
            let email = ""
            let password = ""
            let data = req.flash('data')[0]

            if (typeof data != "undefined"){
                email = data.emailinput
                password = data.passwordinput
            }
            
            res.render('registerPage', {
                errors: req.flash('validationErrors'),
                email: email,
                password: password
            })
        }
    
    2.7 แก้ไข views -> registerPage.ejs, เพิ่มค่า value ให้กับ email และ password

        <% if(errors != null && errors.length > 0) { %>
            <% for(let i = 0; i < errors.length; i++) { %>
                <p class="alert alert-danger">
                <%= errors[i]%>
                </p>
            <% } %>
        <% } %>

        <input type="email" name = "emailinput" value="<%= email %>" class="form-control" id="floatingInput" placeholder="name@example.com">
        <input type="password" name = "passwordinput" value="<%= password %>" class="form-control" id="floatingPassword" placeholder="Password">

    2.8 ข้อมูลจากการสมัครสมาชิกจะถูกเก็บไว้ในฐานข้อมูล
        Database -> Browse Collections -> users

3. Login & Logout System

    3.1 Login

        3.1.1 ทำการสร้างไฟล์ controller -> loginUserController.js เพื่อทำการเปรียบเทียบชื่อผู้ใช้ และ password

            const bcrypt = require('bcrypt')
            const User = require('../models/User')

            module.exports = (req, res) => {

                // รับค่ามาจากหน้าเว็บไซต์
                const {emailinput, passwordinput} = req.body

                // เทียบค่ากับฐานข้อมูล
                User.findOne({emailinput: emailinput}).then((user) =>  {
                    console.log(user)

                    if (user){
                        let cmp = bcrypt.compare(passwordinput, user.passwordinput).then((match)=>{
                            if (match){
                                req.session.userId = user._id
                                res.redirect('/')
                            } else{
                                res.redirect('/login')
                            }
                        })
                    } else{
                        res.redirect('/login')
                    }
                })
            }

        3.1.2 ทำการสร้าง route ที่ index.js

            const loginUserController = require('./controllers/loginUserController')
            app.post('/user/login', loginUserController)

        3.1.3 ทำการเก็บ session ที่ index.js

            global.loggedIn = null

            app.use("*", (req, res, next) =>{
                loggedIn = req.session.userId
                next()
            })

        3.1.4 ทำการแก้ไข indexPage.ejs เมื่อมีการเข้าสู่ระบบให้มีปุ่ม Logout

            <% if (loggedIn) { %>
            <a class="btn btn-sm btn-danger" href="/logout">Logout</a>
            <% } %>

            <% if (!loggedIn) { %>
            <a class="btn btn-sm btn-outline-secondary mx-3" href="/login">Sign In</a>
            <a class="btn btn-sm btn-success" href="/register">Sign Up</a>
            <% } %>

    3.2 Logout

        3.2.1  ทำการสร้างไฟล์ controller -> logoutUserController.js เพื่อทำการทำลาย session

            module.exports = (req, res) => {
                req.session.destroy(() => {
                    res.redirect('/')
                })
            }

        3.2.2 ทำการสร้าง route ที่ index.js

            const logoutUserController = require('./controllers/logoutController')
            app.get('/logout', logoutUserController)

4. middleware

    4.1 ทำการสร้าง middleware เมื่อเข้าสู่ระบบแล้วไม่ให้ redirect ไปหน้า login, register

        4.1.1 middleware -> redirectIfAuth.js

            module.exports = (req, res, next) => {
                if (req.session.userId){
                    return res.redirect('/')
                }
                next()
            }

        4.1.2 แก้ไขไฟล์ index.js

            // Middleware
            const redirectIfAuth = require('./middleware/redirectIfAuth')

            // เพิ่ม middleware
            app.get('/', indexController)
            app.get('/login', redirectIfAuth, loginController)
            app.get('/register', redirectIfAuth, registerController)
            app.post('/user/register', redirectIfAuth, storeUserController)
            app.post('/user/login', redirectIfAuth, loginUserController)
            app.get('/logout', logoutUserController)

    4.2 สร้างหน้า homepage

        4.2.1 views -> homePage.ejs

            ทำการ copy จาก indexPage.ejs และแก้ไข

            <div class="col-md-6 px-0">
                <h1 class="display-4 fst-italic">Home Page</h1>
                <p class="lead mb-0"><a href="#" class="text-white fw-bold">Welcome</a></p>
            </div>

        4.2.2 ทำการสร้างไฟล์ controller -> homeController.js

            module.exports = (req, res) => {
                res.render('homePage')
            }

        4.2.3 สร้าง middleware -> authMiddleware.js ถ้าไม่ login จะไม่สามารถเข้าหน้า homepage ได้

            const User = require('../models/User')
            module.exports = (req, res, next) => {
                User.findById(req.session.userId).then((user) => {
                    if (!user) {
                        return res.redirect('/')
                    }
                    console.log('user logged in successfully')
                    next()
                }).catch(error => {
                    console.log(error)
                })
            }

        4.2.4 แก้ไขไฟล์ index.js

            const homeController = require('./controllers/homeController')
            const authMiddleware = require('./middleware/authMiddleware')
            app.get('/home', authMiddleware, homeController)

        4.2.5 แก้ไขไฟล์ loginController เมื่อมีการ login ให้ redirect ไปที่หน้า homepage แทน

            const bcrypt = require('bcrypt')
            const User = require('../models/User')

            module.exports = (req, res) => {
                const {emailinput, passwordinput} = req.body
                console.log('helloworld')
                console.log(emailinput)
                console.log(passwordinput)

                User.findOne({emailinput: emailinput}).then((user) =>  {
                    console.log(user)

                    if (user){
                        console.log(passwordinput)
                        console.log(user.passwordinput)
                        let cmp = bcrypt.compare(passwordinput, user.passwordinput).then((match)=>{
                            if (match){
                                req.session.userId = user._id
                                res.redirect('/home')
                            } else{
                                res.redirect('/login')
                            }
                        })
                    } else{
                        res.redirect('/login')
                    }
                })
            }