import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styleModal = StyleSheet.create({
  centeredView: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundModal,
  },
});
