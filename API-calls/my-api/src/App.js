import React, { Component } from 'react';
import axios from 'axios';

 class App extends Component {
  constructor(){
    super();
    this.state={
      listOfTodos :[],
      listOfComments:[]
    }
  }
  componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(resp =>{
             this.setState(
              {
                listOfTodos:resp.data
              }
             )
        }).catch(error=>{
          console.log(error);
        });
        
      // another Api //

      axios.get(`http://localhost:6070/comments`).then((resp)=>{
              this.setState(
                {
                  listOfComments:resp.data
                }
              )
      }).catch(error =>{
        console.log(error);
      });
  }
  render() {
    const{listOfTodos,listOfComments}=this.state;
    return (
      <center>
           {
               listOfTodos.map((item,index)=>{
                return(
                  <div key ={index}>
                         {item.title}
                  </div>
                )
               })
           } 
           <br/> <br/>
               <h1> @@@@@ comments @@@@@@</h1>
           {
            listOfComments.map((item,index)=>{
              return(
                <div key ={index}>
                       {item.id}
                </div>
              )
            })
           }       
      </center>
    )
  }
}
export default App;