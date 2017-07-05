import React, {Component} from 'react';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item1', 'Item2', 'Item3', 'Item4'],
      hover: false,
      selected: 'Select One..'
    };
  }

  handleEnter() {
    this.setState({
      hover: true
    });
  }

  handleExit() {
    this.setState({
      hover: false
    })
  }
  handleSelect(option) {

  }

  render() {
    //If not in hovering state
    // if(!this.state.hover) {
    //   return (
    //     <div>
    //       <div className='title'>Dropdown Menu</div>
    //       <div className='dropdownmenu' onMouseEnter={this.handleEnter.bind(this)}>
    //         <div className='dropdownmenu-item'>{this.state.selected}</div>
    //       </div>
    //     </div>
    //
    //   );
    // }
    // return (
    //   <div>
    //     <div className='title'>Dropdown Menu</div>
    //     <div className='dropdownmenu-hovered' onMouseLeave={this.handleExit.bind(this)}>
    //
    //     </div>
    //   </div>
    // );

    return (
      <div>
        <div className='title'>Dropdown Menu</div>
        <div className='dropdownmenu' onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleExit.bind(this)}>
          {this.state.hover ? (
            this.state.items.map(obj => (
              <div className='dropdownmenu-item'>
                {obj}
              </div>
            ))
          ) : (
            <div className='dropdownmenu-item'>
              {this.state.selected}
            </div>
          )}

        </div>
      </div>
    )

  }
}

export default DropdownMenu;
