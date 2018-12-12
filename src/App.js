import React from 'react';
// import Button from './Button';
// import BlueBox from './blue-box';
// import GreenBox from './green-box';
// import RedBox from './red-box';
import Box from './Box';

import './app.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    // dont put components in state
    this.state = {
      // box1Clicked: 'red',
      // box2Clicked: 'green'
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Random Color Generator</h1>
          <Box />
          <Box />
          <Box />
      </div>
    )
  }
}