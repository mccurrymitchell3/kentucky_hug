import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import MyBottles from './screens/MyBottles';
import Scan from './screens/Scan';
import Ratings from './screens/Ratings';
import Wishlist from './screens/Wishlist';
import Feed from './screens/Feed';
import Search from './screens/Search';
import Achievements from './screens/Achievements';

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
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false
    }
  },
  MyBottles: {
    screen: MyBottles,
    navigationOptions: {
      headerShown: false
    }
  },
  Scan: {
    screen: Scan,
    navigationOptions: {
      headerShown: false
    }
  },
  Ratings: {
    screen: Ratings,
    navigationOptions: {
      headerShown: false
    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      headerShown: false
    }
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerShown: false
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false
    }
  },
  Achievements: {
    screen: Achievements,
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
