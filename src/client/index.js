import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'babel/polyfill';


const store = configureStore();
injectTapEventPlugin();

ReactDom.render(
  <div>
    <Provider store={store}>
      <App store={store} />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
