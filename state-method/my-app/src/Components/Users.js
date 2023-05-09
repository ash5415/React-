import React, { Component } from 'react'

 class Users extends Component {
     constructor(props){
        super();
        this.state = {
            listOfUsers: [
                {Name : 'Ashok', Course : "MIT", Number : 15},
                {Name : 'Ash', Course : "Maths", Number : 16},
                {Name : 'Hari', Course : "Physics", Number : 17},
                {Name : 'Anil', Course : "Chemistry", Number : 18},
            ]
        }
     }
    render() {
        return (
            <>
                {
                  
                  this.state.listOfUsers.map((element,index)=>{
                           return(
                            <div key= {index}>
                               course:{element.Course}, name:{element.Name} , number: {element.Number}
                            </div>
                           )
                    })
                }
            </>
        )
    }
}
export default Users;