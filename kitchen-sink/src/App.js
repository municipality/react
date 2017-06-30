import React, { Component } from 'react';
import Navbutton from './components/Navbutton';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div>
        <Navbutton />
        <Slider />
      </div>
    );
  }
}

export default App;
