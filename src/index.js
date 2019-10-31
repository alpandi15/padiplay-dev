import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import {StoreProvider} from 'store';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

ReactDOM.render(
  <StoreProvider>
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
