import Expo from 'expo';
import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, Dimensions, ActivityIndicator,
  TouchableOpacity
 } from 'react-native';
import StarRating from 'react-native-star-rating';

const {width, height} = Dimensions.get('window')

export class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      // showLoader: true
    }
  }

  /* componentDidMount(){
    this.fetchProdutList({
      id: 1
    });
  } */
  fetchProdutList(data) {
    // this.setState({showLoader: true});
    var url = 'http://staging.php-dev.in:8844/trainingapp/api/products/getList'
    + '?product_category_id=' + data.id;

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
        list: responseData.data
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
    return this.state.list.map(((prop, key) => {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ProductDetails', {id: prop.id})}
          key={key}>
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: prop.product_images}}/>
            <View style={styles.wrapper} >
              <Text style={styles.title}>{prop.name}</Text>
              <Text style={styles.desc}>{prop.producer}</Text>
              <View style={styles.container}>
                <Text style={styles.price}>Rs. {prop.cost}</Text>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={prop.rating}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  fullStarColor="#ffba00"
                  starSize={20}
                  containerStyle={{marginTop: 10, marginLeft: 20}} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    }))
  }
  static navigationOptions = {
    title: 'Product List',
  };
  render() {
    const { navigation } = this.props;
    const category = navigation.getParam('category');
    return (
      <ScrollView>
        {/* <ActivityIndicator animating={true} size="large" color="#e91c1a" style={styles.loader}/> */}
        {this.fetchProdutList({id: category})}
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    margin: 5,
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
    fontSize: 12,
    marginTop: 8,
  },
  price: {
    color: '#fe4040',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
   rating: {
   },
   loader: {
    position: 'absolute',
    width: width * 0.5,
    height: height * 0.5
   },
   line: {
    borderBottomColor: '#4f4f4f',
    borderBottomWidth: 1
   }
});