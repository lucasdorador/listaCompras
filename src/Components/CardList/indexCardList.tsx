import React from 'react';
import {Button, Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../global/theme';
import ProgressBar from '../ProgressBar/indexProgressBar';
import {StyleCardList} from './styleCardList';

const CardList: React.FC = () => {
  const handleLongPress = () => {
    console.log('long press');
  };
  const handlePress = () => {
    console.log('clicou');
  };

  return (
    <TouchableHighlight
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={{borderRadius: 10}}>
      <View style={StyleCardList.ContainerMain}>
        <ProgressBar />
        <Text style={StyleCardList.Description}>Compras do Churrasco</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CardList;
