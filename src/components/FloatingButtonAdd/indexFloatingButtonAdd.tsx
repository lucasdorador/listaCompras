import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../global/theme';

const FloatingButtonAdd: React.FC = () => {
  return (
    <View style={StyleFAB_Add.container}>
      <TouchableOpacity
        style={StyleFAB_Add.button}
        onPress={() => console.log('FAB')}>
        <Icon name="add" size={50} color={theme.colors.greenSecundary} />
      </TouchableOpacity>
    </View>
  );
};

const StyleFAB_Add = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 30,
    right: 30,
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});

export default FloatingButtonAdd;
