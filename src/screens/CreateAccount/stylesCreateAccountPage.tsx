import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const stylesCreateAccountPage = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  containerMain: {
    display: 'flex',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  lineSeparator: {
    width: '100%',
    backgroundColor: theme.colors.greenSecundary,
    opacity: 0.4,
    height: 12,
  },
  lineSeparatorTOP: {
    position: 'absolute',
    top: 0,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  lineSeparatorBOTTOM: {
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  containerLogo: {
    display: 'flex',
    height: 250,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textLOGIN: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  Logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  containerInputs: {
    display: 'flex',
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerButton: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});
