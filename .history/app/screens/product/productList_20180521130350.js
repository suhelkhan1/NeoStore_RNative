import Expo from 'expo';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Easing } from 'react-native';
import StarRating from 'react-native-star-rating';

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
            <View style={styles.container}>
              <Text style={styles.price}>Rs. 27,000</Text>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={3.5}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                fullStarColor="#ffb700"
                starSize={20}
                containerStyle={{marginTop: 10, marginLeft: 'auto'}}
              />
            </View>
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
   }
});