import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: '#FFFFFF'
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer theme={MyTheme}> 
    <MainStackNavigator />
 
  </NavigationContainer>
  </SafeAreaProvider>
  );
}