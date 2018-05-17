/* import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, Alert } from 'react-native';
 */
/* class Greeting extends React.Component {
  render() {
    return (
      <Text> Hello {this.props.name}</Text>
    );
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="Suhel"></Greeting>
      </View>
    );
  }
}
 */
/* export default class App extends React.Component {
  render() {
    let width = Dimensions.get('window').width;
    let pic = {
      uri: 'https://www.developer-tech.com/media/img/news/reactive-nativingitup.png.800x600_q96.png'
    };
    return (
      <Image source={pic} style={{width: width, height: 100}} />
    );
  }
} */

/* class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true
    };
    setInterval(() => {
      this.setState(previousState => {
        return {
          isShowingText: !previousState.isShowingText
        };       
      });
    }, 1500);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : '';
    let width = Dimensions.get('window').width;
    return (
      <Text style={styles.textDanger} >{display}</Text>
    );
  };
}

export default class BlinksApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
} */

/* export default class PizzaTranslator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  };
  _onPressButton() {
    Alert.alert('You tapped the button!')
  };

  render() {
    let width = Dimensions.get('window').width;
    let pic = {
      uri: 'https://www.developer-tech.com/media/img/news/reactive-nativingitup.png.800x600_q96.png'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: width, height: 100}} />
        <TextInput 
            style={styles.myInput}
            placeholderTextColor="#fff" 
            placeholder="Type here to translate" 
            onChangeText={(text) => this.setState({text})} />
        <Button title="Submit" onPress={this._onPressButton} />
        <Text>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textDanger: {
    color: '#fff',
    fontWeight: 'bold'
  },
  myInput: {
    height: 50, 
    width: 300, 
    color: '#fff', 
    marginTop: 30, 
  }
});
 */