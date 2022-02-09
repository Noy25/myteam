// React
import React from 'react';
import ReactDOM from 'react-dom';
// Root Cmp
import { App } from './App';
// Assets
import './styles/styles.scss';


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);