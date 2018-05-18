import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as screens from './screens/index';

const RootStack = createStackNavigator(
  {
    Home: screens.HomeScreen,
    Login: screens.LoginScreen,
    Register: screens.RegisterScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#e91c1a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

Expo.registerRootComponent(App);