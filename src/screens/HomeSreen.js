import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { View, Text, Button, Platform } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerBackTitle: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 20 : 0 }}>
            <View>
                <Text>HOME SCREEN</Text>
                <Button
                    title="Push me" onPress={() => {
                    navigate('Details', {
                        username: 'Viet'
                    });
                }}
                />
            </View>
            </View>
        );
    }
}

export default Home;
