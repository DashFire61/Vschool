const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{ 
        type: String,
        required: true,
    },
    status:{   
        type: String,
        required: true,
        enum: ["alive", "dead", "unknown"]
    },
    rewardInCredits:{ 
        type: Number,
        required: true,
    },
    allignment:{
        type: String,
        required: true,
        enum: ["light", "dark", "grey"]
    },
    allegiance:{
        type: String,
        required: true,
        enum: [ "jedi", "sith", "galactic republic", "empire", "eternal empire", "old republic", "old sith empire", "new republic", "first order", "rebels", "unaffiliated", "CIS",]
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
})

module.exports = mongoose.model("Bounty", bountySchema)





// let Bountys = [
//     {
//         firstName: "first",
//         lastName: "last",
//         status: "alive, dead, unknown",
//         reward: 0,
//         allignment: "light, dark, grey",
//         allegiance: "jedi, sith, galactic republic, empire, eternal empire, old republic, old sith empire, new republic, first order, rebels, unaffiliated",
//         _id: uuidv4(),
//     }
// ]