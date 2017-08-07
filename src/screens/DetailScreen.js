import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { View, Text,Button, Platform } from 'react-native';

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
          <Text>
            
          </Text>

        </View>
      </View>
    );
  }
}

export default DetailScreen;
