import React, {useState} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/react-hooks-redux';
import {
  openCloseModalEditLongPressCard,
  setAlterCardClicked,
} from '../../Store/Actions/Components/ModalEditLongPressCard/actionModalEditLongPressCard';
import {IPropsCards} from '../../Store/Slices/Components/Cards/sliceCards';
import EditLongPressCard from '../EditLongPressCard/indexEditLongPressCard';
import ProgressBar from '../ProgressBar/indexProgressBar';
import {StyleCardList} from './styleCardList';

interface IPropsCardComponent {
  card: IPropsCards;
}

const CardList: React.FC<IPropsCardComponent> = props => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(
    state => state.modalEditLongPressCard.cardClicked,
  );

  const handleLongPress = () => {
    dispatch(setAlterCardClicked(props.card));
    dispatch(openCloseModalEditLongPressCard(true));
  };
  const handlePress = () => {
    console.log(`Clicou  id: ${props.card.id}`);
  };

  return (
    <React.Fragment>
      <TouchableHighlight
        onPress={handlePress}
        onLongPress={handleLongPress}
        style={{
          borderRadius: 10,
          marginBottom: 20,
          borderColor: 'red',
          borderWidth: props.card.id === id ? 2 : 0,
        }}>
        <View style={StyleCardList.ContainerMain}>
          <ProgressBar
            currentPosition={props.card.totalElementsSelected}
            maxElements={props.card.maxElements}
          />
          <Text style={StyleCardList.Description}>
            {props.card.description}
          </Text>
        </View>
      </TouchableHighlight>
    </React.Fragment>
  );
};

export default CardList;
