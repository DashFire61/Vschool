import React, {Component} from 'react';
import './App.css';
import Auth from './components/Auth'
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import { withUser } from './context/UserProvider.js'


class App extends Component {
  constructor(){
      super()
      this.state = {}
  }


  render(){
    const { token } = this.props // since I'm connected to the User provider down below with `withUser(App)`
    return (
        <div>
            <Switch>
                <Route 
                    exact path="/" 
                    render={rProps => !token ? <Auth {...rProps}/> : <Redirect to="/home"/> }/>
                <Route  
                    path="/home"
                    render={rProps => token ? <Home {...rProps}/> : <Redirect to="/"/> }/>
            </Switch>
        </div>
    )
}
}

export default withUser(App)
    
    /*

      <Header />
      <Navbar />
      <User />
      <Feed />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      
     */
