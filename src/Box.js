/* eslint-disable default-case */
import React from 'react';
import './box.css';

export default class Box extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 'red'
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
  
  render() {
    return (
      <div className='box' style={{backgroundColor: this.state.color}}>
        <button onClick={(e) => this.handleClick(e)}>Change</button> 
      </div>)
    }
}  