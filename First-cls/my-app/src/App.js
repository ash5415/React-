import React, { Component } from 'react';
import Life from './components/Life';

 class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Subscribe To My Chanel",
             sub:"Subscribe",
             img:"URL A"
        };
    }

    ButtonChange = () => {
        this.setState=({
            message: "hit the button"
        });
    }

    ChangeImage = () => {
      this.setState =({
          img : "URL B" 
      });
    }

    render() {
        return (
            <div>
                <h1> Welcome To The React</h1>
                <h2> {this.state.message}</h2>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p/>
                <img src ={this.state.img} alt ="" 
                             onClick={this.ChangeImage}/>
                          <Life/>                       
            </div>
        )
    }
}
export default App;





