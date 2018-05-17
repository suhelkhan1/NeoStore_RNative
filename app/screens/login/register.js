import React from 'react';
import {
  Text, View, StyleSheet, ImageBackground, Dimensions, TextInput, TouchableOpacity, Alert,
  Icon
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { SPLASH } from '../../assets/images/index';

const {width, height} = Dimensions.get('window')
const radio_props = [
  {label: 'Male', value: 0 },
  {label: 'Femle', value: 1 }
];

export class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
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
          {/* <Icon style={{padding: 10}} name="ios-search" size={20} color="#000"/> */}
          <TextInput
            style={styles.inputStyle}
            placeholder="First Name"
            underlineColorAndroid="transparent"
            placeholderTextColor="#fff" />
        </View>
        <View style={styles.container2}>
          {/* <Icon style={{padding: 10}} name="ios-search" size={20} color="#000"/> */}
          <TextInput
            style={styles.inputStyle}
            placeholder="Last Name"
            underlineColorAndroid="transparent"
            placeholderTextColor="#fff" />
        </View>
        <View style={styles.container2}>
          {/* <Icon style={{padding: 10}} name="ios-search" size={20} color="#000"/> */}
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            underlineColorAndroid="transparent"
            placeholderTextColor="#fff" />
        </View>
        <View style={styles.container2}>
          {/* <Icon style={{padding: 10}} name="ios-search" size={20} color="#000"/> */}
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            underlineColorAndroid="transparent"
            placeholderTextColor="#fff" />
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Confirm Password"
            placeholderTextColor="#fff" />
        </View>
        <View style={styles.container4}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}} >
            Gender
          </Text>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            buttonColor={'#fff'}
            formHorizontal={true}
            buttonSize={10}
            style={{marginTop: 15, position: 'absolute', right: 0}}
            labelStyle={{fontSize: 15, color: '#fff', marginRight: 10}}
            onPress={(value) => {this.setState({value:value})}}
          />
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Phone Number"
            placeholderTextColor="#fff" />
        </View>
        <View style={styles.container3}>
          <Text style={{fontSize: 14, color: '#fff'}} >I agree Terms & Conditions</Text>
          <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 0.7,
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
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40,
    marginLeft: 40,
    // justifyContent: 'center',
  },
  titleNeo: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 50,
    marginBottom: 20
  },
  inputStyle: {
    width: width * 0.8,
    height: 40,
    paddingLeft: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width * 0.8,
    height: 40,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 3
  },
  buttonText: {
    color: '#e91c1a',
    fontSize: 25,
    fontWeight: 'bold',
  }
});