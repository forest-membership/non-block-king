import React from 'react';
import MainView from './pages/MainView';
import { basicTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={basicTheme}>
      <MainView />
    </ThemeProvider>
  );
}

export default App;
