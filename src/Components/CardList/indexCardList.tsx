import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import ProgressBar from '../ProgressBar/indexProgressBar';
import {StyleCardList} from './styleCardList';

interface IPropsCardComponent {
  id: string;
  description: string;
  maxElements: number;
  totalElementsSelected: number;
}

const CardList: React.FC<IPropsCardComponent> = props => {
  const handleLongPress = () => {
    console.log(`long press id: ${props.id}`);
  };
  const handlePress = () => {
    console.log(`Clicou  id: ${props.id}`);
  };

  return (
    <TouchableHighlight
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={{borderRadius: 10, marginBottom: 20}}>
      <View style={StyleCardList.ContainerMain}>
        <ProgressBar
          currentPosition={props.totalElementsSelected}
          maxElements={props.maxElements}
        />
        <Text style={StyleCardList.Description}>{props.description}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CardList;
