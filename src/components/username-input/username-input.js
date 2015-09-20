import React, {Component} from 'react';
import ActionButton from './../action-button/action-button'

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
        <input type="text" onChange={this.onChange.bind(this)} placeholder='Username' />
        <ActionButton onClick={this.fetchUser.bind(this, actions)} buttonText='Fetch User Data' />
        <ActionButton onClick={this.fetchRepos.bind(this, actions)} buttonText='Fetch User Repos' />
      </div>
    );
  }
}

export default UsernameInput;