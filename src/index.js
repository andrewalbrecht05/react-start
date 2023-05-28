import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

if( window.screen.width <= 600 )
{
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
}
