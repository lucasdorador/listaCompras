import React from 'react';
import {Modal, View} from 'react-native';
import {styleModal} from './styleModal';
import {AppThunk} from '../../store/configureReduxStore';
import {useAppDispatch} from '../../hooks/react-hooks-redux';

type IPropsModalComponent = {
  children: React.ReactElement;
  openModal: boolean;
  fnCloseModal: (arg: any) => AppThunk;
};

const CustomModal: React.FC<IPropsModalComponent> = ({
  children,
  openModal = false,
  fnCloseModal,
}) => {
  const dispatch = useAppDispatch();
  return (
    <Modal
      animationType="slide"
      transparent
      visible={openModal}
      presentationStyle="overFullScreen"
      onRequestClose={() => {
        dispatch(fnCloseModal(false));
      }}>
      <View style={styleModal.centeredView}>{children}</View>
    </Modal>
  );
};

export default CustomModal;
