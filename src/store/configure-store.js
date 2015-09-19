import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initalState) {

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

  const store = createStoreWithMiddleware(rootReducer, initalState);

  //enable HMR on reducers
  if(module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    });
  }
  return store;
}