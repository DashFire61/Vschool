import React from 'react'
import Results from './Results'


const LoggedIN = (props) => {
      return (
        <div>
          <div>
            <h1>Bounty Database</h1>
            <h2>Entry Format</h2>
            <p>First Name: first</p>
            <p>Nast Name: last</p>
            <p>Status: alive, dead, unknown</p>
            <p>RewardrewardInCredits: 10000</p>
            <p>Allignment: light, dark, grey</p>
            <p>Allegiance: jedi, sith, galactic republic, CIS, empire, rebels, eternal empire, old republic, old sith empire, new republic, first order, unaffiliated</p>
            <p>Entries are case sensitive and must match.</p>
          </div>
          <div className = {"formDiv"}>
          <form onSubmit={props.handleSubmit}>
            <input
            name = "firstName" 
            type ="text" 
            onChange={props.handleChange} 
            value={props.firstName}
            placeholder="First Name"/>
            <input
            name = "lastName" 
            type ="text" 
            onChange={props.handleChange} 
            value={props.lastName}
            placeholder="last Name"/>
            <input
            name = "status" 
            type ="text" 
            onChange={props.handleChange} 
            value={props.status}
            placeholder="status"/>
            <input
            name = "rewardInCredits" 
            type ="number" 
            onChange={props.handleChange} 
            value={props.rewardInCredits}
            placeholder="Reward In Credits"/>
            <input
            name = "allignment" 
            type ="text" 
            onChange={props.handleChange} 
            value={props.allignment}
            placeholder="allignment"/>
            <input
            name = "allegiance" 
            type ="text" 
            onChange={props.handleChange} 
            value={props.allegiance}
            placeholder="allegiance"/>
            <button>add new bounty</button>
          </form>
          </div>
          <div>
            {/* if post has error post error here */}
            <p></p>
          </div>
          <div>
{props.bountys.map(bounty => <Results {...bounty} remove = {props.remove} handleEditChange={props.handleEditChange}handleEditSubmit={props.handleEditSubmit}/>)}
          </div>
        </div>
      );
  };

  export default LoggedIN;