import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const StyleCardList = StyleSheet.create({
  ContainerMain: {
    display: 'flex',
    borderRadius: 10,
    backgroundColor: theme.colors.colorBorder,
    paddingLeft: 10,
    paddingRight: 10,
    height: 90,
    justifyContent: 'space-evenly',
  },
  ContainerIcon: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  Description: {
    fontSize: 18,
    fontWeight: 'normal',
    color: theme.colors.white,
  },
});
