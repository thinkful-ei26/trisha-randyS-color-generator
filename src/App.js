import React from 'react';
import Box from './Box';
import './app.css'

export default class App extends React.Component  {

  constructor(props) {
    super(props);

    //store state for three boxes
    this.state = {
      boxColor: 'red'
    }
  }

  randomColorGenerator() {
    const colors = ['red', 'brown', 'blue', 'green', 'yellow', 'orange', 'black'];
    const index = Math.floor(Math.random() * 7);
    return colors[index];
  }

  handleClick() {
    this.setState({
      color: this.randomColorGenerator()
    })
  }

  render() {return (
    <div className="container">
      <h1>Random Color Generator</h1>
        <Box color={this.randomColorGenerator()}/>
        <Box color={this.randomColorGenerator()}/>
        <Box color={this.randomColorGenerator()}/>
        <button 
        onClick={(e) => this.handleClick(e)}>
          Change All
        </button> 
    </div>
  )
  }
}