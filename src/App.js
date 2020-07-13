import './App.css';
import React, { Component } from 'react';
import Banner from './Components/Banner';
import PawForm from './Components/PawForm'

class App extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <PawForm/>
      </div>
    );
  }
}

export default App;
