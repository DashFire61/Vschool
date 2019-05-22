const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    },
    acceptedBounties: [{
        type: Schema.Types.ObjectId,
        ref: "Bounty",
    }]
})

module.exports = mongoose.model("User", userSchema)