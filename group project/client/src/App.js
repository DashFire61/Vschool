import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import MainMenu from './MainMenu'

class App extends Component {
render(){
  return(
    <div>
      <div className = {"gameBox"}>
        <Switch>
          <Route exact path="/" component={MainMenu}/>
        </Switch>
      </div>
    </div>
)
}
}
export default App;
