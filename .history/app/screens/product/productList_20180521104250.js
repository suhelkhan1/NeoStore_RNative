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
          <Text style={styles.title}>Stylish Modern Dining Tables</Text>
          <Text style={styles.desc}>Product Table Center</Text>
          <Text style={styles.price}>270000</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    margin: 5
  },
  image: {
    width: 85,
    height: 80,
    margin: 5,
    position: 'absolute'
  },
  title: {
    color: '#4f4f4f',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 16,
    marginLeft: 95
  },
  desc: {
    color: '#4f4f4f',
    fontSize: 9,
    marginTop: 8,
    marginLeft: 95
  },
  price: {
    color: '#fe4040',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 95
  }
});