import React, { Component } from 'react';
import './App.css';

class FirstClass extends Component {

  constructor() {
    super();
  }

  state = {
    title: 'first test class',
  }



  render() {
    return (
      <div className="test" >
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}


export default FirstClass;