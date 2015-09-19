import React, {Component} from 'react';

class actionButton extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {onClick, buttonText} = this.props;
    return (
      <button onClick={onClick}>{buttonText}</button>
    );
  }

}

export default actionButton;