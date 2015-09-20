import React, {Component} from 'react';

class actionButton extends Component {

  render() {
    const {onClick, buttonText} = this.props;
    return (
      <button onClick={onClick}>{buttonText}</button>
    );
  }

}

export default actionButton;