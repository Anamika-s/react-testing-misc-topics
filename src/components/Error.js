import React, { Component } from 'react'

export default class ErrorD extends Component {
constructor(props)
{
  super(props);
  this.state=
  {
     hasError : false,
     errorMsg:""
  }
}

// getderivedStateFromError(error)
// {
//   this.setState({hasError:true})
//   console.log("inside getderivedStateFromError")
// }

componentDidCatch(error, info) {
  
     this.setState({hasError:true, errorMsg:error.message})
    
     
}
  render() {
    
    
    if(this.state.hasError){
    return (
    <h1> There is some Error  : {this.state.errorMsg} </h1>
    )}
    return  [this.props.children] 
   
  }
}
