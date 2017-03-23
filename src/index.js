import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import ConfigureStore from './store/configureStore';
import getRoutes from './routes';
import surveyData from './data/data';

const initialState = {
  surveys: {
    surveyData,
    currActive: 0,
  },
};

const store = ConfigureStore(initialState);
const routes = getRoutes();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'),
);
