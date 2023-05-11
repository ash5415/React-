/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

 class Login extends Component {
  
    // we need a state because to store the local data//

        constructor(){
            super();
            this.state ={
                username :"",
                password :""
            }
        }
   // we need a login handler which can take the input and send to the server //

   onLogin =()=>{
    const{username,password}=this.state;
    alert("username : " + username + "password :" + password);
   }

   onReset= ()=>{
      this.setState(
        {
            username:"",
            password :""
        }
      ); 
   }

   onChange = (event, field)=>{
       this.setState(
        {
            [field] : event.target.value
        }
       );
   }
    render() {
        const{username,password}= this.state;
        return (
            <div>
                <h1> Login Form</h1>
                <label> Username:</label>
                <input type="username" value={username} onChange = {(event) =>{this.onChange(event,'username')}}/>
                <br/> <br/>
                <label> Password:</label>
                <input type="password" value={password} onChange ={(event) =>{this.onChange(event,'password')}}/>
                <br/><br/>
                <button onClick={this.onLogin}> Login</button>
                <button onClick={this.onReset}> Clear</button>
            </div>
        )
    }
}
export default Login;