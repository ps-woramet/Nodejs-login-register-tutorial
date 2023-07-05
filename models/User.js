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