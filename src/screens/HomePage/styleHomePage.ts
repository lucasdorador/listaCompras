import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styleHomePage = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    position: 'relative',
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
