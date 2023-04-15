import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import './index.css';

const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    grey: '#787c82',
    blue: '#395189',
    whiteGrey: '#f3f3f3',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
