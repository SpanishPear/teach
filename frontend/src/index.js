import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import theme from './theme';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Switch>{routes}</Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
