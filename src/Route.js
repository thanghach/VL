import React, { Component } from 'react';
// import { connect } from 'react-redux';

import HomeScreen from './screens/HomeSreen';
import DetailScreen from './screens/DetailScreen';
import { StackNavigator, TabNavigator } from 'react-navigation';

const Route = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailScreen },
    Detailsa: { screen: DetailScreen },
    Detailsb: { screen: DetailScreen },
    Detailsc: { screen: DetailScreen }
  },
  {
    tabBarPosition: 'bottom',  
    tabBarOptions: {
      activeTintColor: '#000fff',
      showIcon: true
    }
  }
);

export default Route;
