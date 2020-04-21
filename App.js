import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Login from './screens/Login';

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
  },
  Login: {
    screen: Login,
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
