import React, {Component} from 'react';

class actionButton extends Component {

  render() {
    const {onClick, buttonText, className} = this.props;
    return (
      <button className={className} onClick={onClick}>{buttonText}</button>
    );
  }

}

export default actionButton;