import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styleButton = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.colorBorder,
    margin: 5,
    width: '100%',
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 20,
  },
  textButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});
