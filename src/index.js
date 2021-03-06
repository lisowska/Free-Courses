import register from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//style
import './index.scss';
// libs
import './../bower_components/font-awesome/css/font-awesome.min.css';
import './../bower_components/flag-icon-css/css/flag-icon.min.css';

// Containers
import Container from './containers/container';
import reducers from './reducers';

register();

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Container />
  </Provider>
  , document.getElementById('app'));


