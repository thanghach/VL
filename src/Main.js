import React, { Component } from 'react';
// import { connect } from 'react-redux';

import HomeScreen from './screens/HomeSreen';
import DetailScreen from './screens/DetailScreen';
import { StackNavigator, TabNavigator } from "react-navigation";

const Main = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailScreen },
    Detailsa: { screen: DetailScreen }
  },
  { scrollEnabled: true }
);

export default Main;