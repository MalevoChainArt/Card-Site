import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.jsx';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  mountNode
);
