import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.buttons = ['HOME', 'GALLERY', 'ABOUT'];
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-inner'>
          {
            this.buttons.map(x => <button key={x} className='navbar-button'>{x}</button>)
          }
        </div>
      </div>
    );
  }

}

export default Navbar;
