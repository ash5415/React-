import React, { Component } from 'react';

// import all the actions //
import Actions from'../Actions'

// import items.js component//
import Items from '../Components/Items';

 // i need connect method and proptypes frm redux ///
import {connect} from'react-redux';

import {PropTypes} from'prop-types'


 class App extends Component {
       componentDidMount(){
        this.props.getFoodItems()
       }
  render() {
    return (
      <>
        <Items list={this.props.finalState}/>
      </>
    )
  }
}
App.propTypes ={
    getFoodItems: PropTypes.func.isRequired
}
const mapStateToProps =(state)=>{
    return(
        {
            finalState:state.food
        }
    )
}

  
export default connect(mapStateToProps,Actions)(App);