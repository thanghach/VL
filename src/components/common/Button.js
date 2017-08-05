import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (

        <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </TouchableOpacity>
  );
};

const styles = {

  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
  },
  buttonStyle: {
    width: 120,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#ED1D27',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#f99d48',
    marginRight: 5
  }
};

export { Button };
