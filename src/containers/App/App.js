import React, { Component, PropTypes } from 'react';
import UsernameInput from '../../components/username-input/username-input';
import User from '../../components/user-card/user-card';
import Repos from '../../components/repos/repos';
import styles from './App.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as githubActions from '../../actions/actions';

class App extends Component {

  render() {
    const { github, dispatch, store } = this.props;
    const actions = bindActionCreators(githubActions, dispatch);
    return (
      <div className={styles.container}>
        <UsernameInput actions={actions} />
        <User store={store} actions={actions} />
        <Repos store={store} />
      </div>
    );
  }
}

App.propTypes = {
  github: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func
  ]),
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    github: state.github
  };
}

export default connect(mapStateToProps)(App);
