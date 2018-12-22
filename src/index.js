import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/App';
import './style.css';
import '../favicon.ico';
import'./snow.js';

ReactDom.render(
    <App />,
    document.getElementById('app')
);