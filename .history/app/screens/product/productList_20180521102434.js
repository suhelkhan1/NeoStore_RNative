import Expo from 'expo';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export class ProductList extends React.Component {
  static navigationOptions = {
    title: 'Product List',
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/images/slide1.jpg')}/>
          <Text style={styles.title}>My Product</Text>
          <Text style={styles.desc}></Text>
          <Text style={styles.price}></Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',,
    margin: 10
  },
  image: {
    width: width * 0.25,
    height: height * 0.12,
    margin: 10
  },
  title: {
    fontSize: 13,
    fontWeight: '500'
  }
});