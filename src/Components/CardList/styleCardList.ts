import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const StyleCardList = StyleSheet.create({
  ContainerMain: {
    borderRadius: 10,
    backgroundColor: theme.colors.colorBorder,
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ContainerIcon: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  Description: {
    fontSize: 22,
    fontWeight: 'normal',
    color: theme.colors.white,
  },
});
