import React, { Component } from 'react';


class Header extends Component {
  render (name) {
    return (
      <div className="header">{this.props.name} is cool</div>
    )
  }
}
export default Header;
