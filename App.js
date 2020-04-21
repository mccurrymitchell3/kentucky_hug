import React from 'react';
import Home from './screens/Home';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  }
}, {
  initialRouteName: 'Home',
  // defaultNavigationOptions: {
  //   headerShown: false
  // }
});

const AppContainer = createAppContainer(AppNavigator);
