import { Component } from 'react'

import Users from './Components/Users';

 class App extends Component {
  constructor(props){
    super();
    this.state = {
      name :"ASH",
      course : "MIT",
      school : "RMIT"
    }
  }
  render() {
    const{name,course}= this.state;     
    return (
      <div>
           <h1> name of the person : {name} </h1> 
           <h2> enrolled course : {course}</h2>
           <h3> where you studying : {this.state.school}</h3>
           <Users/>
      </div>
      
    )
  }
}
export default App;