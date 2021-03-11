import React from 'react';
import MainView from './pages/MainView';
import PvPView from './pages/PvPView';
import { basicTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import SocketProvider from './contexts/SocketContext';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={basicTheme}>
      <SocketProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainView} />
            <Route path="/pvp" component={PvPView} />
            <Route path="/pvf" />
            <Route path="/pve" />
            <Redirect path="*" to="/" />
          </Switch>
        </BrowserRouter>
      </SocketProvider>
    </ThemeProvider>
  );
}

export default App;
