import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Results from 'Results.js'

class App extends Component {
  constructor(){
    super()
    this.state ={
      bountys: [
      ],
      firstName: "",
      lastName: "",
      status: "",
      rewardInCredits: "",
      allignment: "",
      allegiance: "",
    }
  }


  componentDidMount(){
    axios.get("./bountys").then(response => {
      this.setState({
        bountys: response.data
      })
      console.log(response)
    })
    .catch(err => console.log(err))
  }


handleChange = e => {
  const {name, value} = e.target
  this.setState({[name]:value})
}

handleSubmit = e => {
  e.preventDefault()
  const newBounty = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    status: this.state.status,
    rewardInCredits: this.state.rewardInCredits,
    allignment: this.state.allignment,
    allegiance: this.state.allegiance,
  }
  axios.post("/bountys", newBounty)
    .then(response => {
      this.setState({
        bountys: response.data,
        firstName: "",
        lastName: "",
        status: "",
        rewardInCredits: "",
        allignment: "",
        allegiance: "",
      })
  })
  .catch(err => console.log(err))
}

  render() {
    return (
      <div>
        <div>
          <h1>Entry format</h1>
          <p>First Name: first</p>
          <p>Nast Name: last</p>
          <p>Status: alive, dead, unknown</p>
          <p>RewardrewardInCredits: 10000</p>
          <p>Allignment: light, dark, grey</p>
          <p>Allegiance: jedi, sith, galactic republic, empire, eternal empire, old republic, old sith empire, new republic, first order, rebels, unaffiliated</p>
        </div>
        <form
        onSubmit={this.handleSubmit}>
          <input
          name = "firstName" 
          type ="text" 
          onChange={this.handleChange} 
          value={this.state.firstName}
          placeholder="First Name"/>
          <input
          name = "lastName" 
          type ="text" 
          onChange={this.handleChange} 
          value={this.state.lastName}
          placeholder="last Name"/>
          <input
          name = "status" 
          type ="text" 
          onChange={this.handleChange} 
          value={this.state.status}
          placeholder="status"/>
          <input
          name = "rewardInCredits" 
          type ="number" 
          onChange={this.handleChange} 
          value={this.state.rewardInCredits}
          placeholder="Reward In Credits"/>
          <input
          name = "allignment" 
          type ="text" 
          onChange={this.handleChange} 
          value={this.state.allignment}
          placeholder="allignment"/>
          <input
          name = "allegiance" 
          type ="text" 
          onChange={this.handleChange} 
          value={this.state.allegiance}
          placeholder="allegiance"/>
          <button>add new bounty</button>
        </form>
        <div>
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
