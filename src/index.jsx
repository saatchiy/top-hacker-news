import {AppContainer} from 'react-hot-loader'; // required  
import React from 'react';  
import {render} from 'react-dom';  
import AppContainer from './containers/AppContainer.jsx';
import css from './../stylesheets/main.scss';

export function renderWithHotReload(app) {
  render (
      <AppContainer app={app}/>
    , document.getElementById('app-id')
  );
}