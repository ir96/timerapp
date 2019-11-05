import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import AppComponent from './App';
import * as serviceWorker from './serviceWorker';
import './styles/app.scss';
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AppComponent />, document.getElementById('app'));
serviceWorker.unregister();

