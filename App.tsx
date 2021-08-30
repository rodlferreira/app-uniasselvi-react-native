import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import 'styled-components';
import Home from './src/screen/Home';
import light from './src/global/styles/Theme/light';
import dark from './src/global/styles/Theme/dark';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState(light);
  const toggledTheme = () => {
    const themeMode = theme.mode === 'light' ? dark : light;
    setTheme(themeMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' backgroundColor='#FEDE3B'/>
      <Home toggledTheme={toggledTheme}/>
    </ThemeProvider>
  );
}
