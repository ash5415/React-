import React, { Component } from 'react'
import {
    Route,
    BrowserRouter
} from 'react-router-dom';

import Home from '../Components/Home';
import Filter from '../Components/Filter';
 class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path = "/" Component ={Home}/>
        <Route path ="/Home" Component ={Home}/>
        <Route path = "/Filter" Component = {Filter}/>
      </BrowserRouter>
    )
  }
}
export default Router; 