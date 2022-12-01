import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styleHomePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkSecundary,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.white,
    paddingLeft: 10,
  },
  bodyCards: {
    display: 'flex',
    margin: 15,
  },
});
