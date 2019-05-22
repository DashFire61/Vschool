import React, {Component} from 'react';

class Results extends Component{
        constructor(){
                super()
                this.state={
                        edit: false,

                }
        }


        render(){
                if (! this.state.edit){
                return(
                        <div id = {"replaceMe"}className={"results"} key={this.props.firstName}>
                        <button onClick={()=>this.props.remove(this.props._id)} className={"x2"}>x</button>
                        <h1 className={`${this.props.allignment}Name`}>{this.props.firstName}  {this.props.lastName}</h1>
                        <p className={this.props.status}>{this.props.status}</p>
                        <p className={"money"}>{this.props.rewardInCredits} Credits</p>
                        <p className={this.props.allignment}>{this.props.allignment}</p>
                        <p className={this.props.allegiance.replace(/\s+/g, '')}>{this.props.allegiance}</p>
                        <p className={"id"}>{this.props._id}</p>
                        <p className={"userID"}>{this.props.user}</p>
                        <button onClick={()=>this.setState({edit:true})} className={"x"}>edit</button>
                        </div>
                )}
                return(
                        <div id = {"iamReplacement"}className={"results"}>
                <button onClick={() => this.props.remove(this.props._id)} className={"x2"}>x</button>
                <form onSubmit={() => this.props.handleEditSubmit(this.props._id)}>
                <input
                name = "firstName" 
                type ="text" 
                onChange={this.props.handleEditChange} 
                value={this.props.firstName}
                placeholder="First Name"/>
                <input
                name = "lastName" 
                type ="text" 
                onChange={this.props.handleEditChange} 
                value={this.props.lastName}
                placeholder="last Name"/>
                <input
                name = "status" 
                type ="text" 
                onChange={this.props.handleEditChange} 
                value={this.props.status}
                placeholder="status"/>
                <input
                name = "rewardInCredits" 
                type ="number" 
                onChange={this.props.handleEditChange} 
                value={this.props.rewardInCredits}
                placeholder="Reward In Credits"/>
                <input
                name = "allignment" 
                type ="text" 
                onChange={this.props.handleEditChange} 
                value={this.props.allignment}
                placeholder="allignment"/>
                <input
                name = "allegiance" 
                type ="text" 
                onChange={this.props.handleEditChange} 
                value={this.props.allegiance}
                placeholder="allegiance"/>
                <button>save bounty</button>
                </form>
                <button onClick={() => this.setState({edit:false})} className={"x"}>stop editing</button>
        </div>)
                
        }
        
};

export default Results;