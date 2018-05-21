import Expo from 'expo';
import React from 'react';
import {
  View, Text, StyleSheet, Dimensions, ScrollView
 } from 'react-native';
const {width, height} = Dimensions.get('window')

export class ProductDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  fetchProdutDetails(data) {
    // this.setState({showLoader: true});
    var url = 'http://staging.php-dev.in:8844/trainingapp/api/products/getDetail'
    + '?product_id=' + data.id;

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'access_token': `${token}`,
      }
    })
    .then((response)=> response.json())
    .then((responseData)=> {
      console.log(responseData)
      this.setState({
        product: responseData.data
      });
      // this.setState({showLoader: false});
    }).catch(function(error) {
    console.log('Product List: ' + error.message);
      // ADD THIS THROW error
      // this.setState({showLoader: false});
      throw error;
    })
  }
  renderProducts() {
    return (
      <View style={styles.container}>
        <Text>{this.state.product.name}</Text>
      </View>
    )
  }
  static navigationOptions = {
    title: 'Product Details',
  };
  render() {
    const { navigation } = this.props;
    const productId = navigation.getParam('id');
    return (
      <ScrollView>
        {/* <ActivityIndicator animating={true} size="large" color="#e91c1a" style={styles.loader}/> */}
        {this.fetchProdutDetails({id: productId})}
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});