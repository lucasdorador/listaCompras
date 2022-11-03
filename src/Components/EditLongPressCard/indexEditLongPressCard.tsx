import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../hooks/react-hooks-redux';
import {openCloseModalEditLongPressCard} from '../../Store/Actions/Components/ModalEditLongPressCard/actionModalEditLongPressCard';
import Button from '../Button/indexButton';
import CustomModal from '../Modal/indexModal';
import {styleEditLongPressCard} from './styleEditLongPressCard';

const EditLongPressCard: React.FC = props => {
  const {open, cardClicked} = useAppSelector(
    state => state.modalEditLongPressCard,
  );

  return (
    <CustomModal
      openModal={open}
      fnCloseModal={openCloseModalEditLongPressCard}>
      <View style={styleEditLongPressCard.containerMain}>
        <View style={styleEditLongPressCard.header}>
          <Text style={styleEditLongPressCard.textHeader}>
            Lista alterada:{' '}
          </Text>
          <Text style={styleEditLongPressCard.textDescriptionCard}>
            {cardClicked.description}
          </Text>
        </View>
        <Button title="Editar" />
        <Button title="Excluir" />
      </View>
    </CustomModal>
  );
};

export default EditLongPressCard;
