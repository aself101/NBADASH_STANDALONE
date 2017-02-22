import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NBAProfile from './containers/nba_profile';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension());


ReactDOM.render(
  <Provider store={store}>
    <NBAProfile />
  </Provider>,
  document.getElementById('app'));
