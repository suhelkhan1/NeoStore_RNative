import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import { ApiService } from '../../api/ApiService';
import * as images from '../../assets/images/index';

const {width, height} = Dimensions.get('window')

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: {
        slide1: images.SLIDE1,
        slide2: images.SLIDE2,
        slide3: images.SLIDE3,
        slide4: images.SLIDE4,
        slide5: images.SLIDE5,
      }
    };
  }

  /* componentDidMount(){
    this.fetchProdutDetails({
      product_id: 3
    });
  }

  fetchProdutDetails(data) {
    var url = 'http://staging.php-dev.in:8844/trainingapp/api/products/getDetail'
    + '?product_id=' + data.product_id;

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
        image1: responseData.data.product_images[0].image,
        image2: responseData.data.product_images[1].image,
        image3: responseData.data.product_images[1].image
      });
    })
  } */
  static navigationOptions = {
    title: 'NeoSTORE',
  };
  render() {
    return (
      <View style={styles.container}>
        {/* Image Slider */}
        <Swiper style={styles.wrapper} height={200} showsButtons={true} autoplay>
          <View style={styles.slide1}>
            <Image style={styles.image} source={this.state.slides.slide1} />
          </View>
          <View style={styles.slide1}>
            <Image style={styles.image} source={this.state.slides.slide2} />
          </View>
          <View style={styles.slide1}>
            <Image style={styles.image} source={this.state.slides.slide3} />
          </View>
          <View style={styles.slide1}>
            <Image style={styles.image} source={this.state.slides.slide4} />
          </View>
          <View style={styles.slide1}>
            <Image style={styles.image} source={this.state.slides.slide5} />
          </View>
        </Swiper>

        {/* Category tabs */}
        <View style={styles.container1}>
          <TouchableOpacity
              onPress={this._onPressButton}>
              <View style={styles.touchable}>
              <Text style={styles.touchableInput}>Tables</Text>
            </View>
          </TouchableOpacity>
          <Text style={{width: 13}} ></Text>
          <TouchableOpacity
              onPress={this._onPressButton}>
              <View style={styles.touchable}>
              <Text style={styles.touchableInput}>Sofas</Text>
            </View>
          </TouchableOpacity>
        {/* </View>
        <View style={styles.container1}> */}
          <TouchableOpacity
              onPress={this._onPressButton}>
              <View style={styles.touchable}>
              <Text style={styles.touchableInput}>Chairs</Text>
            </View>
          </TouchableOpacity>
          <Text style={{width: 13}} ></Text>
          <TouchableOpacity
              onPress={this._onPressButton}>
              <View style={styles.touchable}>
              <Text style={styles.touchableInput}>Cupboards</Text>
            </View>
          </TouchableOpacity>
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
    /* flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-evenly' */
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  touchable: {
    width: width * 0.45,
    height: 150,
    backgroundColor: 'red',
    marginTop: 10,
    // marginLeft: 10,
  },
  touchableInput: {
    margin: 30,
    fontSize: 18,
    color: '#fff'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#9DD6EB',
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
  },
  image: {
    width: 'auto',
    flex: 1
  }
});