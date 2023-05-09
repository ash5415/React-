import React, { Component } from 'react'

 class Book extends Component {
    constructor(){
        super();
        this.state ={
            count : 0,
            school : 'RMIT',
            course : 'MIT'
        }
    }

 onIncrease = () => {
      this.setState(
        {
            count : this.state.count +1
        }
      );

 }

 onDecrease = () => {
    this.setState (
        {
            count : this.state.count -1
        }
    );
 }

    render() {
        const {school, course} = this.state;
        return (
            <div>
                <h1> welcome to the React class</h1>
                <h2> Total count of the class : {this.state.count}</h2>
                <h3> school name : {school}</h3>
                <h4> course :{course}</h4>
               <button onClick={this.onIncrease}>Increase</button>   
               <button onclick={this.onDecrease}>Decrease</button>
            </div>
        )
    }
}
export default Book;