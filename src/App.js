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
      box1Clicked: RedBox,
      box2Clicked: GreenBox
    }
  }

  randomBoxGenerator() {
    const boxes = [GreenBox, BlueBox, RedBox];
    const num = Math.floor(Math.random() * Math.floor(3));
    return boxes[num];
  }

  handleBox1Click() {
    this.setState({
      box1Clicked: this.randomBoxGenerator()
    })
  }

  handleBox2Click() {
    this.setState({
      box2Clicked: this.randomBoxGenerator()
    })
  }

//1) On button click, randomBoxGenerator will change the state the box whose button was clicked

  render() {
  
    const MyBox1 = this.state.box1Clicked;
    const MyBox2 = this.state.box2Clicked;

      return (
        <div className="container">
          <h1>Random Color Generator</h1>
          <div className="box1">
            <MyBox1 />
            <Button onClick={e => this.handleBox1Click(e)} />
          </div>
          <div className="box2">
            <MyBox2 />
            <Button onClick={e => this.handleBox2Click(e)} />
          </div>             
        </div>
      )
  }
}