import {AppContainer} from 'react-hot-loader'; // required  
import React from 'react';  
import {render} from 'react-dom';  
import AppContainer from './containers/AppContainer.jsx';
import css from './../stylesheets/main.scss';

renderWithHotReload(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/AppContainer.jsx', () => {
    const App = require('./containers/AppContainer.jsx').default;
    renderWithHotReload(App);
  });
}

function renderWithHotReload(App) {
  render (
      <AppContainer />
    , document.getElementById('app-id')
  );
}