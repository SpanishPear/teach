import { createMuiTheme } from '@material-ui/core';

const themeObj = {
  palette: {
    background: {
      default: '#caf2ff',
    },
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    htmlFontSize: 16,
  },
};

export default createMuiTheme(themeObj);
