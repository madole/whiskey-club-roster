import React, { Component, PropTypes } from 'react';
import Counter  from '../components/counter';
import UsernameInput from '../components/username-input';
import styles from './App.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as githubActions from '../actions/actions';

class App extends Component {

  render() {
    const { github, dispatch } = this.props;
    const actions = bindActionCreators(githubActions, dispatch);

    return (
      <div className={styles.container}>
        <div>{JSON.stringify(github)}</div>
        <Counter increment={1} className={styles.counter1} />
        <Counter increment={12} className={styles.counter2} />
        <UsernameInput actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  github: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    github: state.github
  };
}

export default connect(mapStateToProps)(App);
