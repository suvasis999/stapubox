import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import NavStack from './src/navigation/NavStack';
import './global.css';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

enableScreens(true); 

export default function App() {
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
