import './App.css';
import React, { Component } from 'react';
import Banner from './Components/Banner';
import PawContainer from './Components/PawContainer';

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <Banner/>
        <PawContainer/>
      </div>
    );
  }
}

export default App;
