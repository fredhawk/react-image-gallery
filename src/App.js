import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Pics from Crete 2017</h1>
        </header>
        <Slider />
        <a href="https://github.com/osycon/react-image-gallery">Project on Github</a>
      </div>
    );
  }
}

export default App;
