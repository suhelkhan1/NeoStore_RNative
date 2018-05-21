import Expo from 'expo';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export class ProductList extends React.Component {
  static navigationOptions = {
    title: 'Product List',
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/images/slide1.jpg')}/>
          <Text style={styles.title}></Text>
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
  },
});