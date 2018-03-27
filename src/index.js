import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import {routes} from './routes';
import {HashRouter as R} from 'react-router-dom';


ReactDOM.render(<R><App /></R>, document.getElementById('root'));
