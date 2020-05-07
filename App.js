import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import KentuckyHug from './screens/KentuckyHug';
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
import Register from './screens/Register';
import AddFriend from './screens/AddFriend';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createStackNavigator({
  KentuckyHug: {
    screen: KentuckyHug,
    navigationOptions: {
      headerShown: false
    }
  },
  Register: {
    screen: Register,
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
  Home: {
    screen: Home,
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
      title: 'My Bottles',
      headerTintColor: 'black',
      headerBackTitleVisible: false
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
      title: 'Ratings',
      headerTintColor: 'black',
      headerBackTitleVisible: false
    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      title: 'Wishlist',
      headerTintColor: 'black',
      headerBackTitleVisible: false
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
      title: 'Achievements',
      headerTintColor: 'black',
      headerBackTitleVisible: false
    }
  },
  AddFriend: {
    screen: AddFriend,
    navigationOptions: {
      title: 'Add Friend',
      headerTintColor: 'black',
      headerBackTitleVisible: false
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications',
      headerTintColor: 'black',
      headerBackTitleVisible: false
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerTintColor: 'black',
      headerBackTitleVisible: false
    }
  }
}, {
  initialRouteName: 'KentuckyHug',
  // defaultNavigationOptions: {
  //   headerShown: false
  // }
});

const AppContainer = createAppContainer(AppNavigator);
