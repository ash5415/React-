import React, { Component } from 'react'

 class life extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "ASH"
        }
        console.log(`im coming from constructor`)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(`im coming from getDerivedStateFromProps`);
        return null;
    }
    componentDidMount(){
       console.log(`im coming from ComponentDidMount`)
    }
    render() {
        console.log(`im coming form render`)
        return (
            <div>
                <h1> Welcome to the react</h1>
            </div>
        )
    }
}
export default life;