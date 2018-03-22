import React, { Component } from 'react';
import PresIn from './PresIn';
import '../assets/css/index.css';

class App extends Component{
  render(){
      return (
        <div className="app__wrapper ">
          <PresIn />
        </div>
      );
  }
}
export default App;