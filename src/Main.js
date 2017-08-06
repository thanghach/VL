import React, { Component } from 'react';
// import { connect } from 'react-redux';

import HomeScreen from './screens/HomeSreen';
import DetailScreen from './screens/DetailScreen';
import { StackNavigator } from "react-navigation";

const Main = StackNavigator({
  Home: { screen: HomeScreen },
  Details: {screen: DetailScreen}
});

export default Main;
