import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const store = configureStore();

React.render(
  <div>
    <Provider store={store}>
      {() => <App store={store}/>}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);

