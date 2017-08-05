import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ListView,
  ActivityIndicator
} from 'react-native';
import { Button, Ball } from './components/common';
import { ResultFetch } from './actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }
  componentDidMount() {
    this.props.ResultFetch();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.results != null) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.results)
      });
    }
  }
  onPress() {}

  renderRow(rowData) {
    return (
      <View>
        <Text>
          ---{rowData.title}
        </Text>
      </View>
    );
  }

  render() {
    const { dataSource } = this.state;
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 20 : 0 }}>
        <View style={styles.row}>
          <Button onPress={this.onPress.bind(this)}>Lấy số</Button>
          <Button onPress={this.onPress.bind(this)}>Lưu số</Button>
        </View>
        
        <ActivityIndicator
          animating={this.props.isLoading}
          style={[styles.centering, { height: 80 }]}
          size="large"
          color="#0000ff"
        />

        <ListView
          style={{ marginTop: 20, flex: 1 }}
          dataSource={dataSource}
          renderRow={rowData => this.renderRow(rowData)}
        />

        <Ball style={{ backgroundColor: "#000000" }}>02</Ball>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    PrizeText: {
        color: '#ffffff'
    },
    GetNums: {
        width: 120,
        height: 25,
        borderRadius: 25,
        backgroundColor: '#ED1D27',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#f99d48',
        marginRight: 5
   }
});


function mapStateToProps(state) {
    console.log(state.result);
    return {
        filterStatus: state.numbers.nums[0],
        results: state.results
    };
}

export default connect(mapStateToProps, { ResultFetch })(Main);
