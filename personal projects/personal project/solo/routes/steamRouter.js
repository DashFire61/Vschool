const express = require('express')
const steamRouter = express.Router()
const User = require('../models/User.js')
const axios = require('axios')





    steamRouter.get("/displayName", async (req, res, next) =>{
        try{

            const user = await User.findOne({_id:req.user._id})
            let data = await axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=37314FFEEC79310727026EBF2DB722E8&steamids=${user.steamID}`)
                let array = data.response.players
                let finalObj = array[0]
                let displayName = finalObj.personaname
                    return res.status(201).send(displayName)
        }catch(err){
                res.status(500)
                return next(new Error("Couldn't find that user."))
            
        }
    }
    )


                
       
    module.exports = steamRouter