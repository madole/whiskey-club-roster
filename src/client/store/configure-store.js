import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { devTools } from 'redux-devtools';

export default function configureStore(initalState) {
  const store = compose(
    applyMiddleware(thunk),
    devTools()
  )(createStore)(rootReducer, initalState);

// enable HMR on reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
