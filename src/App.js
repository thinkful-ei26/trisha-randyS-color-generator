import React from 'react';
import Button from './Button';
import BlueBox from './blue-box';
import GreenBox from './green-box';
import RedBox from './red-box';
import './app.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      display: 'button'
    }
  }

  randomBoxGenerator() {
    const boxes = [GreenBox, BlueBox, RedBox];
    const num = Math.floor(Math.random() * Math.floor(3));
    return boxes[num];
  }

  handleClick() {
    this.setState({display: 'box'})
  }

  render() {

    const MyBox = this.randomBoxGenerator();

    if (this.state.display === 'box') {
      return (
        <div className="container">
          <h1>Random Color Generator</h1>
          <MyBox />
          <Button onClick={e => this.handleClick(e)} />
        </div>
      )
    }
    if (this.state.display === 'button') {
      return (
        <div className="container">
          <h1>Random Color Generator</h1>
          <Button onClick={e => this.handleClick(e)} />
        </div>
      )
    }
  }
}