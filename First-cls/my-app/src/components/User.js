import React, { Component } from 'react'

 class User extends Component {
  render() {
    return (
      <div>
        Users : {this.props.active}  {this.props.subtitle}
                  
      </div>
    )
  }
}
export default User;