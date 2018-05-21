import Expo from 'expo';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default class ProductList extends React.Component {
  static navigationOptions = {
    title: 'Product List',
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        
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