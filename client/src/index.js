import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import history from './history';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <App>
        <Route path="/signin" component={Signin} />
      </App>
    </Router>
  </Provider>
  , document.querySelector('.container'));
