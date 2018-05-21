import Expo from 'expo';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Easing } from 'react-native';
import StarRating from 'react-native-star-rating';

const {width, height} = Dimensions.get('window')

export class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    this.fetchProdutList({
      id: 1
    });
  }
  fetchProdutList(data) {
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
    })
  }
  renderProducts() {
    return this.state.list.map(((item) => {
      return (
        <View style={styles.container}>
          <Image style={styles.image} source={require(item.product_images)}/>
          <View style={styles.wrapper} >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.producer}</Text>
            <View style={styles.container}>
              <Text style={styles.price}>Rs. {item.cost}</Text>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.rating}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                fullStarColor="#ffb700"
                starSize={20}
                containerStyle={{marginTop: 10, marginLeft: 20}}
              />
            </View>
          </View>
        </View>
      )
    }))
  }
  static navigationOptions = {
    title: 'Product List',
  };
  render() {
    return (
      <ScrollView>
        {this.renderProducts()}
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