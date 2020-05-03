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
  },
  AddFriend: {
    screen: AddFriend,
    navigationOptions: {
      headerShown: false
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      headerShown: false
    }
  }
}, {
  initialRouteName: 'KentuckyHug',
  // defaultNavigationOptions: {
  //   headerShown: false
  // }
});

const AppContainer = createAppContainer(AppNavigator);
