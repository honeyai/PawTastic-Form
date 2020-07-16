import './App.css';
import React, { Component } from 'react';
import PawForm from './Components/PawForm';

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <PawForm/>
      </div>
    );
  }
}

export default App;
