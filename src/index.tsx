import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from './pages';
import GlobalStyle from './globalStyle';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Search />
  </React.StrictMode>,
  document.getElementById('root')
);