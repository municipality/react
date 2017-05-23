import React, { Component } from 'react'
import Navbar from './components/navbar';
import Intro from './components/intro';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default App;
