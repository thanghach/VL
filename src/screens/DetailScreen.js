import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { View, Text,Button,Image, Platform } from 'react-native';

class DetailScreen extends Component {
  // static navigationOptions = ({navigation}) => ({
  //   title: `${navigation.state.params.username}`,
  //   header: null,
  //   headerRight: <Button title="Info" />
  // })

  render() {
    const { params } = this.props.navigation.state;
    const { goBack } = this.props.navigation;
        return (
        <View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 20 : 0 }}>
			<View>
			<Text>HOME SCREEN</Text>
			<Image source={require('../images/home.png')} />
			<Image style={styles.imgStyle}
				source={{ uri: "https://i-vnexpress.vnecdn.net/2017/08/07/top-1502081245_500x300.jpg" }} />
			</View>
    	</View>
      	);
  }
}
const styles = {
  imgStyle: {
    width: 400,
    height: 300
  }
};

export default DetailScreen;
