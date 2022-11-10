import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styleMainScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkSecundary,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    height: '8%',
    borderBottomColor: theme.colors.colorBorder,
    borderBottomWidth: 2,
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
