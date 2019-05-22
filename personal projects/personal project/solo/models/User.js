const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema


const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    steamID: {
        type: String,
        required: true,
    }
})

////////////
// user model methods

// hook -
    // pre-save() => encrypts user's password before saving to DB
userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) {
        return next()
    }
    bcrypt.hash(user.password, 10, (err, hashed) =>{
        if(err){
            return next(err)
        }
        user.password = hashed
        next()
    })
})

//method -

    // checkPassword => checs password attempt against the encrypted password
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>{
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

    // withoutPassword => remove password from user object before sending server response
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}
module.exports = mongoose.model("User", userSchema)