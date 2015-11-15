import React, { Component, PropTypes } from 'react';
// Component Imports
import DragNDrop from '../../components/drag-and-drop/drag-n-drop';
import AddPerson from '../../components/add-person/add-person';

import styles from './App.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';

import materialUiMixin from '../../mixins/material-ui-mixin';
import ReactMixin from 'react-mixin';

@ReactMixin.decorate(materialUiMixin)
class App extends Component {
  static propTypes = {
    store: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const { dispatch, store, mainReducer } = this.props;
    const { cards } = mainReducer;

    const boundActions = bindActionCreators(actions, dispatch);
    return (
      <div className={styles.container}>
        <AddPerson actions={boundActions} />
        <DragNDrop cards={cards} actions={boundActions}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    mainReducer: state.mainReducer,
  };
}

export default connect(mapStateToProps)(App);
