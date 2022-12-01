import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../hooks/react-hooks-redux';
import {openCloseModalEditLongPressCard} from '../../store/actions/components/ModalEditLongPressCard/actionModalEditLongPressCard';
import CustomButton from '../Button/indexButton';
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
        <CustomButton title="Editar" />
        <CustomButton title="Excluir" />
      </View>
    </CustomModal>
  );
};

export default EditLongPressCard;
