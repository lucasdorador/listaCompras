import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import theme from '../../global/theme';

const CustomTextInput: React.FC<TextInputProps> = props => {
  return (
    <TextInput
      style={styleTextInput.textInput}
      placeholderTextColor={theme.colors.secundaryWhite}
      {...props}
    />
  );
};

const styleTextInput = StyleSheet.create({
  textInput: {
    width: '80%',
    borderWidth: 2,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: theme.colors.greenSecundary,
    borderRadius: 50,
    color: theme.colors.secundaryWhite,
  },
});

export default CustomTextInput;
