import {AppContainer} from 'react-hot-loader'; // required  
import React from 'react';  
import {render} from 'react-dom';  
import AppCont from 'gui/views/containers/AppContainer.jsx';
import css from 'gui/style/main.scss';

export function renderWithHotReload(app) {
  render (
      <AppCont app={app}/>
    , document.getElementById('app-id')
  );
}