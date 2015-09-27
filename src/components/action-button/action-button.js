import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';

class actionButton extends Component {

  render() {
    const {onClick, buttonText, primary} = this.props;
    return (
    <RaisedButton label={buttonText} primary={primary} onTouchTap={onClick} />
    );
  }

}

export default actionButton;