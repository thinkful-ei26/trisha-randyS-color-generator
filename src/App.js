import React from 'react';
import Button from './Button';
import RedBox from './red-box';
import GreenBox from './green-box';
import BlueBox from './blue-box';

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
    console.log('click')
    this.setState({display: 'box'})
  }

  render() {

    const MyBox = this.randomBoxGenerator();

    if (this.state.display === 'box') {
      return (
        <div>
          <MyBox />
          <Button onClick={e => this.handleClick(e)} />
        </div>
      )
    }
    if (this.state.display === 'button') {
      return (
        <Button onClick={e => this.handleClick(e)} />
      )
    }
  }
}  