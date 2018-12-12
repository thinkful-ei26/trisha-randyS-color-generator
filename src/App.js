import React from 'react';
import Button from './Button';
import ColorBox from './ColorBox';

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       backgroundColor: rgb(0, 0, 225)
//     }
//   }

//   return (
//   <div className="app">
//     <ColorBox />
//     <Button />
//   </div>)

// }  

export default function App()  {

  return (
  <div className="app">
    <ColorBox />
    <Button />
  </div>)

}  