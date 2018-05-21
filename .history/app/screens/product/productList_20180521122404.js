import Expo from 'expo';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Easing } from 'react-native';

import Rating from 'react-native-rating'
const images = {
  starFilled: require('../../assets/images/star_filled.png'),
  starUnfilled: require('../../assets/images/star_unfilled.png')
}
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
          <View style={styles.wrapper} >
            <Text style={styles.title}>Stylish Modern Dining Table</Text>
            <Text style={styles.desc}>Product Table Center</Text>
            <Text style={styles.price}>Rs. 27,000</Text>
            <Rating
              selectedStar={images.starFilled}
              unselectedStar={images.starUnfilled}
              stagger={80}
              maxScale={1.4}
              starStyle={{
                width: 30,
                height: 30
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5
  },
  wrapper: {
    marginLeft: 5,
    width: 'auto'
  },
  image: {
    width: 85,
    height: 80,
    margin: 5,
    // position: 'absolute'
  },
  title: {
    color: '#4f4f4f',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 16,
  },
  desc: {
    color: '#4f4f4f',
    fontSize: 9,
    marginTop: 8,
  },
  price: {
    color: '#fe4040',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
   rating: {
    // margin: 10
    borderColor: '#000',
    borderWidth: 2
   }
});