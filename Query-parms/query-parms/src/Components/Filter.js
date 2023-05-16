import React, { Component } from 'react'
import queryString from 'query-string';

 

class Filter extends Component {
      constructor(props){
        super(props);
        this.state ={
            product :"",
            model : ""
        }
      }
    componentDidMount(){
        const qs = queryString.parse(this.props.location.search);
        console.log(qs);
        this.setState(
            {
                product:qs.product,
                model : qs.model
            }
        )
    }
  render() {
    const{product,model} = this.state;
    return (
      <div>
           <h1>Filter</h1> 
           <h2> Details about iphone 13 : {product}, {model}</h2>
      </div>
    )
  }
}
export default Filter;