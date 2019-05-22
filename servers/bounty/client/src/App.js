import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import {Switch, Route} from 'react-router-dom'
import SignIn from './SignIN'
import LoggedIN from './LoggedIN'

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
      _id: "",
      user: {
        username: "",
        acceptedBounties: "",
        _id:"",
      },
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
  userHandleChange = e => {
    const {name, value} = e.target
    this.setState({user:{
      [name]:value,
      _id: "",
    }})
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
    axios.post(`/bountys/${this.state.user._id}`, newBounty)
      .then(response => {
        this.setState(prevState =>({
          bountys: [...prevState.bountys ,response.data],
          firstName: "",
          lastName: "",
          status: "",
          rewardInCredits: "",
          allignment: "",
          allegiance: "",
        }))
    })
    .catch(err => console.log(err))
  }


  signUpSubmit = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.user.username,
      acceptedBounties: [],
    }
    axios.post(`/user/signup`, newUser)
      .then(response => {
        this.setState(prevState =>({
          user: {
            username: response.data.username,
            acceptedBounties: response.data.acceptedBounties,
            _id: response.data._id,
          },
        }))
      })
      .catch(err => console.log(err))
  }



  signInSubmit = e => {
    e.preventDefault()
    axios.get(`/user/${this.state.user.username}`)
      .then(response => {
        this.setState({
          user: {
            username: response.data.username,
            acceptedBounties: response.data.acceptedBounties,
            _id: response.data._id,
          }
        })
      
      })
  }

  handleEditChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
}

handleEditSubmit = (bountyToEdit) => {
    const updatedUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      status: this.state.status,
      rewardInCredits: this.state.rewardInCredits,
      allignment: this.state.allignment,
      allegiance: this.state.allegiance,
  }
  axios.put(`/bountys/${bountyToEdit}`, updatedUser)
}


  remove = (bountyToDelete) => {
    axios.delete(`/bountys/${bountyToDelete}`)
    .then(response => {
      this.setState(prevState => ({
        bountys: prevState.bountys.filter(bounty=>bounty._id !== bountyToDelete)
      }))
    })
  }

  render(){
    if(this.state.user._id === ""){
      return(
        <SignIn {...this.state}userHandleChange={this.userHandleChange}signInSubmit={this.signInSubmit}signUpSubmit={this.signUpSubmit}/>
      )
    }
    return(
      <LoggedIN {...this.state}handleChange={this.handleChange}handleSubmit={this.handleSubmit} remove={this.remove} handleEditSubmit={this.handleEditSubmit} handleEditChange={this.handleEditChange}/>
    )
  }



}


export default App;
