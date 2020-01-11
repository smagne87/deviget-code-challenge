import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import baseTheme from './styles/js/global/baseTheme';
import AppNavigator from './AppNavigator';
import './App.scss';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <AppNavigator />
  </ThemeProvider>
);

export default App;
