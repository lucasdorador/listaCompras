import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styleEditLongPressCard = StyleSheet.create({
  containerMain: {
    width: '92%',
    padding: 15,
    justifyContent: 'center',
    backgroundColor: theme.colors.secundaryWhite,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: theme.colors.darkPrimary,
    borderWidth: 2,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.black,
    borderBottomWidth: 1,
    borderColor: theme.colors.greenPrimary,
    marginBottom: 15,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 'normal',
    color: theme.colors.black,
  },
  textDescriptionCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
});
