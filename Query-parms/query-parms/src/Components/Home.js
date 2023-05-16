import React, { Component } from 'react'
import {withRouter} from'react-router-dom'

 class Home extends Component {
    // this is hte history object. this object force the router to go to that page/
    onNav = ()=>{
        this.props.history.push('/Filter?product=iphone&model=13')
    }
  render() {
    return (
      <div>
           <h1> Welcome this is my Home Component </h1>
         <button onClick={this.onNav}>Filter</button>   
      </div>
    )
  }
}
export default withRouter(Home);