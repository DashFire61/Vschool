import React from 'react';
// import App from 'App.js'

// App()

function Results(){ 
        {this.state.bountys.map(bounty => <h1 key={bounty.firstName}>{bounty.firstName}</h1>)}
        {this.state.bountys.map(bounty => <h1 key={bounty.lastName}>{bounty.lastName}</h1>)}
        {this.state.bountys.map(bounty => <h1 key={bounty.status}>{bounty.status}</h1>)}
        {this.state.bountys.map(bounty => <h1 key={bounty.reward}>{bounty.reward}</h1>)}
        {this.state.bountys.map(bounty => <h1 key={bounty.allignment}>{bounty.allignment}</h1>)}
        {this.state.bountys.map(bounty => <h1 key={bounty.allegiance}>{bounty.allegiance}</h1>)}
        {this.state.bountys.map(bounty => <h1 key={bounty._id}>{bounty._id}</h1>)}
    
}

export default Results;