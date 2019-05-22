import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider.js'
import { withSteam } from '../../context/SteamProvider.js'


class Home extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            steamID: "",
            displayName: ""
        }
    }

    componentDidMount(){
        this.props.displayName()
        console.log(this.props.displayName())
    }
    

    // axios.get("./bountys").then(response => {
    //     this.setState({
    //       bountys: response.data
    //     })
    //     console.log(response)
    //   })
    //   .catch(err => console.log(err))
    // }




render(){
    return (
        <div className={"container"}>
                <div>
                    <p>username:</p><span>twitch.tv/DashFire61</span>
                </div>

                <div>
                    <p>last online:</p><span> 12/05/19 (4 days ago)</span>
                </div>

                <div>
                    <p>profileurl:</p><span>"https://steamcommunity.com/id/DashFire61/"</span>
                </div>

                <div>
                    <p>avatar:</p> <img src ="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b8/b89ae40a4e951a0d5af5d26fe996e663a83906d2_medium.jpg"/>
                </div>

                <div>
                    <p>realname:</p><span>"DashFire61",</span>
                </div>

                <div>
                    <p>primaryclanid:</p><span>103582791435197430",</span>
                </div>

                <div>
                    <p>Member for:</p><span>7 years</span>
                </div>

                <div>
                    <p>Total Friends:</p><span>173</span>
                </div>

                <div>
                    <p>Historic Friends:</p><span>219</span>
                </div>

                <div>
                    <p>bans:</p><span>none</span>
                </div>

                <div>
                    <p>VAC</p><span>Good standing</span>
                </div>

                <div>
                    <p>Trade:</p><span>Repubtable</span>
                </div>

                <div>
                    <p>Community:</p><span>Good Standing</span>
                </div>

                <div>
                    <p>Game Count:</p><span>273</span>
                </div>

                <div>
                    <p>Account Worth Total:</p><span>$11,650</span>
                </div>

                
                <div>
                    <p>Account Worth on Sale Min:</p><span>$1,102</span>
                </div>
            <div>
                <h2>username history:</h2>       
                <p className={"name"}>Twitch.tv DashFire61	</p> <p className={"date"}>1 Feb 3:14pm </p>
                <p className={"name"}>DashFire61</p><p className={"date"}>10 Jun 2018 1:02pm </p>
                <p className={"name"}>*****************</p><p className={"date"}>	8 Jun 2018 8:38pm </p>
                <p className={"name"}>*******	</p><p className={"date"}>8 Jun 2018 8:27pm </p>
                <p className={"name"}>Detroit Smash + Ultra</p> <p className={"date"}>	19 Feb 2018 9:10pm </p>
                <p className={"name"}>Dont Luz Da Wae	</p><p className={"date"}>11 Jan 2018 8:13pm </p>
                <p className={"name"}>Dew U Noe Da Wae	</p> <p className={"date"}>11 Jan 2018 7:46pm </p>
                <p className={"name"}>Do U Noe Da Wae +Ultra </p> <p className={"date"}>	6 Jan 2018 8:47pm </p>
                <p className={"name"}>kurchigga +Ultra	</p><p className={"date"}>28 Dec 2017 8:04pm </p>
                <p className={"name"}>dashfire61+ULTRA	</p><p className={"date"}>27 Dec 2017 10:25pm </p>
            </div> 
        </div>
    )
}

}
export default withUser(withSteam(Home))
