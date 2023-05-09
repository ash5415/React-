import { Component } from 'react'

import Users from './Components/Users';
import Book from './Components/Book';

 class App extends Component {
  constructor(props){
    super();
    this.state = {
      name :"ASH",
      course : "MIT",
      school : "RMIT",
      
    }
  }
  render() {
    const{name,course}= this.state;     
    return (
      <div>
           <h1> name of the person : {name} </h1> 
           <h2> enrolled course : {course}</h2>
           <h3> where you studying : {this.state.school}</h3>
           {/* <h4> total count : {this.state.count}</h4> */}
           <Users/>
           <Book/>    
      </div>
      
    )
  }
}
export default App;