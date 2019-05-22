import React from 'react';


const SignIN = (props) => {
      return (
        <div className = {"signin"}>
          <form className = {"signform"} onSubmit={props.signInSubmit}>
            <input
            name = "username" 
            type ="text" 
            onChange={props.userHandleChange} 
            value={props.user.username}
            placeholder="  UserName"
            className = {"signform"}/>
            
            <button>Sign In</button>
          </form>

          <form className = {"signform"} onSubmit={props.signUpSubmit}>
            <input
            name = "username" 
            type ="text" 
            onChange={props.userHandleChange} 
            value={props.user.username}
            placeholder="  UserName"
            className = {"signform"}/>
            
            <button>Sign up</button>
          </form>
        </div>
      )
  }

  export default SignIN