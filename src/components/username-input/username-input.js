import React, {Component} from 'react';
import ActionButton from './../action-button/action-button'
import styles from './username-input.scss'
import {TextField} from 'material-ui'


class UsernameInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {text: ''};
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  fetchUser(actions) {
    actions.fetchUser(this.state.text);
  }

  fetchRepos(actions) {
    actions.fetchRepos(this.state.text);
  }
  render() {

    const {actions} = this.props;
    return (
      <div>

        <TextField
          hintText="Username"
          floatingLabelText="Github Username"
          type="text" onChange={this.onChange.bind(this)} />
        <ActionButton onClick={this.fetchUser.bind(this, actions)} primary={true} buttonText='Fetch User Data' />
      </div>
    );
  }
}

export default UsernameInput;