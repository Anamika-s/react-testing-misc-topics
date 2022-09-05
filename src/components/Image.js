import React, { Component } from 'react'

export default class Image extends Component {
  constructor(props)
  {
   super(props)
  }
  render() {
    if(this.props.image==="noimage")
    throw new Error("No image provided")
    return (
      <div> Image 
        <img src={this.props.image} alt="No image" height="100px" width="100px"/>
         </div>
    )
  }
}
 