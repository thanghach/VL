import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { View, Text, Button, Image, Platform } from 'react-native';

class Home extends Component {
  // static navigationOptions = {
  //     title: 'Home',
  //     headerBackTitle: null
  // };

  static navigationOptions = {
    tabBarLabel: "Home2",
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../images/home.png")}
        style={{ width: 30, height: 30 }}
      />
    )  
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 20 : 0 }}>
        <View>
          <Text>HOME SCREEN</Text>
          <Image source={require('../images/home.png')} />
          <Image 
            source={{ uri: "https://i-vnexpress.vnecdn.net/2017/08/07/top-1502081245_500x300.jpg" }} />
        </View>
      </View>;
  }
}

export default Home;
