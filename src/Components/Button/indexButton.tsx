import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
} from 'react-native';
import theme from '../../global/theme';

interface IPropsStyleButton {
  width?: string | number;
  borderRadius?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  fontSize?: number;
  backgrundColor?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

interface IPropsBotton extends TouchableOpacityProps {
  title: string;
  titleInLoading?: string;
  loading?: boolean;
  styleCustom?: IPropsStyleButton;
}

const CustomButton: React.FC<IPropsBotton> = props => {
  const _styleButton = styleButton(props.styleCustom!);

  return (
    <TouchableOpacity style={_styleButton.button} {...props}>
      {props.loading ? (
        <View style={_styleButton.containerLoading}>
          <Text style={_styleButton.textButton}>
            {props.titleInLoading ? props.titleInLoading : ''}
          </Text>
          <ActivityIndicator
            size="large"
            color={theme.colors.greenSecundary}
            style={{marginLeft: 15}}
          />
        </View>
      ) : (
        <Text style={_styleButton.textButton}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styleButton = (propsStyle: IPropsStyleButton) =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor:
        propsStyle && propsStyle.backgrundColor
          ? propsStyle.backgrundColor
          : theme.colors.colorBorder,
      margin: 5,
      width: propsStyle && propsStyle.width ? propsStyle.width : '100%',
      paddingBottom:
        propsStyle && propsStyle.paddingBottom ? propsStyle.paddingBottom : 15,
      paddingTop:
        propsStyle && propsStyle.paddingTop ? propsStyle.paddingTop : 15,
      paddingLeft:
        propsStyle && propsStyle.paddingLeft ? propsStyle.paddingLeft : 0,
      paddingRight:
        propsStyle && propsStyle.paddingRight ? propsStyle.paddingRight : 0,
      borderRadius:
        propsStyle && propsStyle.borderRadius ? propsStyle.borderRadius : 20,
    },
    textButton: {
      fontSize: propsStyle && propsStyle.fontSize ? propsStyle.fontSize : 18,
      fontWeight:
        propsStyle && propsStyle.fontWeight ? propsStyle.fontWeight : 'bold',
      color: theme.colors.white,
    },
    containerLoading: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  });

export default CustomButton;
