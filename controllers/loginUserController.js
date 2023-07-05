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