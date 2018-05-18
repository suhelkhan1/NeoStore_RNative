import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Swiper from 'react-native-swiper';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'NeoSTORE',
  };
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={200} showsButtons={true} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <View style={styles.container1}>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.touchable}>
              <Text style={{margin: 30}}>Button</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.touchable}>
              <Text style={{margin: 30}}>Button</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.container1}>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.touchable}>
              <Text style={{margin: 30}}>Button</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.touchable}>
              <Text style={{margin: 30}}>Button</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchable: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    marginLeft: 10
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});