import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>{routes}</Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
