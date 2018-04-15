// @flow

import React from 'react'
import ReactDOM from "react-dom";
import style from "./sharedStyles/index.css";
import {
  App,
  AppState
} from './containers'
import './components/index.js';

ReactDOM.render(
  <AppState>
    <App/>
  </AppState>, 
  (document.getElementById('app'): any)
);
