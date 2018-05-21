import Expo from 'expo';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as screens from './screens/index';

const RootStack = createStackNavigator(
  {
    Home: screens.HomeScreen,
    Login: screens.LoginScreen,
    Register: screens.RegisterScreen,
  },
  {
    initialRouteName: 'Login',
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
    return (
      <FlatList>
        <RootStack />
      </FlatList>
    );
  }
}

Expo.registerRootComponent(App);