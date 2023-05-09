import React, { Component } from 'react'
import User from './User';

 class Life extends Component {
    render() {
        return (
            <div>
                <h1> welcome to the react</h1>
                <User active = "5" subtitle ="active users"/>
            </div>
        )
    }
}
export default Life;