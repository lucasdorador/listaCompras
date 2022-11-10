import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const StyleProgressBar = StyleSheet.create({
  PropertysProgressBar: {
    display: 'flex',
    borderRadius: 10,
    height: 8,
  },
  ContainerMain: {
    display: 'flex',
  },
  ContainerPB: {
    width: '100%',
    backgroundColor: theme.colors.secundaryWhite,
  },
  ProgressBar: {
    backgroundColor: theme.colors.greenLime,
  },
  TextPercent: {
    textAlign: 'right',
    fontSize: 10,
    fontWeight: 'normal',
    color: theme.colors.white,
  },
});
