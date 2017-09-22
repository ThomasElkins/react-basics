import React, { Component } from 'react';
class Footer extends Component {

  render (name) {
    return (
      <div className="footer">{this.props.name} 2017</div>
    )
  }
}
export default Footer;
