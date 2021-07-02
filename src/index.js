import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import reportWebVitals from './reportWebVitals';


export const types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <>
  <AlertProvider template={AlertTemplate} {...options}>
  <Routes/>
  </AlertProvider>
     

      </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
