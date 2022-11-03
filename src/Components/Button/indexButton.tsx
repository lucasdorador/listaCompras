import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styleButton} from './styleButton';

// import { Container } from './styles';

interface IPropsBotton {
  title: string;
}

const Button: React.FC<IPropsBotton> = props => {
  return (
    <TouchableOpacity
      style={styleButton.button}
      onPress={() => console.log('edit')}>
      <Text style={styleButton.textButton}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
