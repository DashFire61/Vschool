import React, { Component } from 'react'
import axios from 'axios'
import { withUser } from './UserProvider'

const SteamContext = React.createContext()
const steamAxios = axios.create()

steamAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


class SteamProvider extends Component {
    constructor(){
        super()
        this.state = {
            displayName : "",
        }
    }

    displayName = () => {
        let data = steamAxios.get(`https://vschool-cors.herokuapp.com?url=http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=37314FFEEC79310727026EBF2DB722E8&steamids=${this.props.steamID}`).then(res =>{
            let array = data.response.players
                let finalObj = array[0]
                let displayName = finalObj.personaname
                console.log(displayName)
                    return res.status(201).send(displayName)
        }).catch(err => {
            return ((err, "Couldn't find that user."))
        })
    }


    games = () => {
        let data = steamAxios.get(`https://vschool-cors.herokuapp.com?url=http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=37314FFEEC79310727026EBF2DB722E8&steamids=${this.props.steamID}`).then(res =>{
            let array = data.response.players
                let finalObj = array[0]
                let displayName = finalObj.personaname
                console.log(displayName)
                    return res.status(201).send(displayName)
        }).catch(err => {
            return ((err, "Couldn't find that user."))
        })
    }







    friends = () => {
        let data = steamAxios.get(`https://vschool-cors.herokuapp.com?url=http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=37314FFEEC79310727026EBF2DB722E8&steamids=${this.props.steamID}`).then(res =>{
            let array = data.response.players
                let finalObj = array[0]
                let displayName = finalObj.personaname
                console.log(displayName)
                    return res.status(201).send(displayName)
        }).catch(err => {
            return ((err, "Couldn't find that user."))
        })
    }








    standings = () => {
        let data = steamAxios.get(`https://vschool-cors.herokuapp.com?url=http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=37314FFEEC79310727026EBF2DB722E8&steamids=${this.props.steamID}`).then(res =>{
            let array = data.response.players
                let finalObj = array[0]
                let displayName = finalObj.personaname
                console.log(displayName)
                    return res.status(201).send(displayName)
        }).catch(err => {
            return ((err, "Couldn't find that user."))
        })
    }









    prices = () => {
        let data = steamAxios.get(`https://vschool-cors.herokuapp.com?url=http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=37314FFEEC79310727026EBF2DB722E8&steamids=${this.props.steamID}`).then(res =>{
            let array = data.response.players
                let finalObj = array[0]
                let displayName = finalObj.personaname
                console.log(displayName)
                    return res.status(201).send(displayName)
        }).catch(err => {
            return ((err, "Couldn't find that user."))
        })
    }





    avatar = () => {
        let data = steamAxios.get(`https://vschool-cors.herokuapp.com?url=http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=37314FFEEC79310727026EBF2DB722E8&steamids=${this.props.steamID}`).then(res =>{
            let array = data.response.players
                let finalObj = array[0]
                let displayName = finalObj.personaname
                console.log(displayName)
                    return res.status(201).send(displayName)
        }).catch(err => {
            return ((err, "Couldn't find that user."))
        })
    }


//  axios.get("./bountys").then(response => {
//       this.setState({
//         bountys: response.data
//       })
//       console.log(response)
//     })
//     .catch(err => console.log(err))
//   }



    render(){
        return(
            <SteamContext.Provider 
                    value={{
                        ...this.state,
                        displayName: this.displayName
                    }}>
                    { this.props.children }
                </SteamContext.Provider>
        )
    }
}

export default withUser(SteamProvider)

export const withSteam = C => props => (
    <SteamContext.Consumer>
        { value => <C {...value} {...props}/> }
    </SteamContext.Consumer>
)