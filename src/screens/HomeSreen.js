import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  Platform,
  ActivityIndicator
} from "react-native";
import { Button, Ball } from "../components/common";
import { NewResultFetch } from '../actions';

class Home extends Component {
  // static navigationOptions = {
  //     title: 'Home',
  //     headerBackTitle: null
  // };

  static navigationOptions = {
    tabBarLabel: 'Home2',
    tabBarIcon: ({ tintColor }) => (
		<Image
		source={require('../images/home.png')}
		style={[{ width: 30, height: 30 }, { tintColor }]}
		/>
    )  
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
        <View style={styles.results}>
          <ActivityIndicator animating={this.props.isLoading} style={[styles.centering, { height: 80 }]} size="large" color="#0000ff" />
        </View>
        <View style={styles.info}>
          <Ball style={{ backgroundColor: "#000000" }}>
            {this.props.num1}
          </Ball>
          <Ball style={{ backgroundColor: "#000000" }}>
            {this.props.num2}
          </Ball>
          <Ball style={{ backgroundColor: "#000000" }}>
            {this.props.num3}
          </Ball>
          <Ball style={{ backgroundColor: "#000000" }}>
            {this.props.num4}
          </Ball>
          <Ball style={{ backgroundColor: "#000000" }}>
            {this.props.num5}
          </Ball>
          <Ball style={{ backgroundColor: "#000000" }}>
            {this.props.num6}
          </Ball>
        </View>
      </View>;
  }
}

const styles = {
	container: {
		flex: 1
	},
	results: {
		flex: 1
	},
	info: {
		flex: 1
	},
	imgStyle: {
		width: 400,
		height: 300
	}
};
function mapStateToProps(state) {
    return {
        filterStatus: state.numbers.nums[0],
        num1: state.newResults.num1,
        num2: state.newResults.num2,
        num3: state.newResults.num3,
        num4: state.newResults.num4,
        num5: state.newResults.num5,
        num6: state.newResults.num6
    };
}

export default connect(mapStateToProps, { NewResultFetch })(Home);
