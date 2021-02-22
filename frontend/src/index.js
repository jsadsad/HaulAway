import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Root from './components/root';


// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

document.addEventListener('DOMContentLoaded', () => {
  // const store = createStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});