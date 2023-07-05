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