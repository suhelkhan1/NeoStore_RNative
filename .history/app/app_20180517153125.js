import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as screens from './screens/index';

const RootStack = createStackNavigator(
  {
    Home: sreens.HomeScreen,
    Login: screens.LoginScreen,
    Register: screens.RegisterScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}