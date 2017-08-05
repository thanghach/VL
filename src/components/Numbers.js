import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Numbers extends Component {
    onPress() {

    }
    render() {
        return (
            <View style={styles.Row}>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={styles.GetNums}>
                    <Text style={styles.PrizeText}>Lấy số may mắn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.GetNums, { width: 70 }]}>
                    <Text style={styles.PrizeText}>Lưu số</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        filterStatus: state.numbers.nums[0]
        // filterStatus: 'hehe'
    };
}

const styles = StyleSheet.create({
    Row: {
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

export default connect(mapStateToProps)(Numbers);
