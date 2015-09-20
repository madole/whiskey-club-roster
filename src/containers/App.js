import React, { Component, PropTypes } from 'react';
import Counter  from '../components/counter';
import UsernameInput from '../components/username-input';
import User from '../components/user';
import styles from './App.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as githubActions from '../actions/actions';

class App extends Component {

  render() {
    const { github, dispatch, store } = this.props;
    const actions = bindActionCreators(githubActions, dispatch);
    return (
      <div className={styles.container}>
        <UsernameInput actions={actions} />
        <User store={store}/>
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
