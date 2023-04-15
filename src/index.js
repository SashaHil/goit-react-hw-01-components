import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';

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
  <Layout>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </Layout>
);
