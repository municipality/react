import React, { Component } from 'react';
import { matchPath, browserHistory } from 'react-router';
import routes from '../routes';

class NavbarButton extends Component {
  //Static class var
  static buttons = [];

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.text = props.text;
    this.path = props.path;
    this.handleClick = this.handleClick.bind(this);
    NavbarButton.buttons.push(this);
    debugger
  }

  handleClick() {
    //Use this.constructor to access static class vars
    this.constructor.buttons.forEach((x, index) => {
      //Set each button state to not active
      x.setState(prevState => ({
        active: false
      }));
    });
    //Set this buttons state to active
    this.setState(prevState => ({
      active: true
    }));
    debugger
    browserHistory.push(this.prop.path);
  }

  render() {
    return <button key={this.path}
            className={this.state.active ? 'navbar-button active' : 'navbar-button'}
            onClick={this.handleClick}>
            {this.text}
          </button>;
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.buttonsTemplate = [{
      route: 'homepage',
      text: 'HOME'
    }, {
      route: 'about',
      text: 'ABOUT'
    }];
    this.buttons = this.buttonsTemplate.map(x => {
      return <NavbarButton key={x.text} text={x.text} path={routes[x.route]}/>
    });
    this.state = {
      buttons: this.buttons
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-inner'>
          {this.state.buttons}
        </div>
      </div>
    );
  }

}

export default Navbar;
