import React from 'react';
import MainView from './pages/MainView';
import { basicTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={basicTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainView} />
          <Route path="/pvp" />
          <Route path="/pvf" />
          <Route path="/pve" />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
