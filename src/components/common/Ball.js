import React from 'react';
import { Text, View } from 'react-native';

const Ball = (props) => {
    return (
        <View style={[styles.ball, props.style]}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
        
    );
};


const styles = {
    text: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 16,
    },
    ball: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ED1D27',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    }
};

export { Ball };
