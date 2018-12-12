import React from 'react';
import Button from './Button';
import ColorBox from './ColorBox';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      display: 'button'

    }
  }

  handleClick() {
    console.log('click')
    this.setState({display: 'box'})
  }

// export default function App()  {
  render() {
    if (this.state.display === 'box') {
      return <ColorBox />
    }
    if (this.state.display === 'button') {
      return (
        <Button onClick={e => this.handleClick(e)} />
      )
    }
  }
}  