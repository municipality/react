import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.buttons = ['Home', 'Gallery', 'About'];
  }

  render() {
    return (
      <div className='navbar'>
        {
          this.buttons.map(x => <button key={x} className='navbar-button'>{x}</button>)
        }
      </div>
    );
  }

}

export default Navbar;
