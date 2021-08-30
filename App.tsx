import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import 'styled-components';
import Home from './src/screen/Home';
import theme from './src/global/styles/Theme/light';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' backgroundColor='#FEDE3B'/>
      <Home />
    </ThemeProvider>
  );
}
