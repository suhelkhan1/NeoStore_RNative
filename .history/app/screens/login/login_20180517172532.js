import React from 'react';
import {
  Text, View, StyleSheet, ImageBackground, Dimensions, TextInput, TouchableOpacity, Alert
} from 'react-native';
import { SPLASH } from '../../assets/images/index';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window')

export class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _onPressButton() {
    Alert.alert('You tapped the button!')
  };
  _onPressLoginButton() {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ImageBackground source={SPLASH} style={{width: width, height: height}}>
        <View style={styles.container}>
          <Text style={styles.titleNeo} >NeoSTORE</Text>
        </View>
        <View style={styles.container2}>
          {/* <Icon name="ios-person" color="#4F8EF7" /> */}
          <TextInput
            style={styles.inputStyle}
            placeholder="Username"
            underlineColorAndroid="transparent"
            placeholderTextColor="#fff" />
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor="#fff" />
        </View>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 14, color: '#fff'}} >Forgot Password?</Text>
        </View>
        <View style={styles.container4}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}} >
            DON'T HAVE AN ACCOUNT?
          </Text>
          <TouchableOpacity style={styles.addAccount} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>+</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container2: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 1,
    alignItems: 'center',
  },
  container4: {
    flex: 0.2,
    flexDirection: 'row',
    alignContent: 'center',
    // justifyContent: 'center',
    margin: 15
  },
  titleNeo: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 50,
    marginBottom: 43
  },
  inputStyle: {
    width: width * 0.8,
    height: 50,
    paddingLeft: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width * 0.8,
    height: 50,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 3
  },
  buttonText: {
    color: '#e91c1a',
    fontSize: 25,
    fontWeight: 'bold',
  },
  addAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#9e0100',
    position: 'absolute',
    right: 0
  }
});