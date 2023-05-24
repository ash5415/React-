import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// import the store ///
import Store from './Store/Store';
import { Provider } from 'react-redux';
// import App component form containers folder//

import App from './Containers/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider Store ={Store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();