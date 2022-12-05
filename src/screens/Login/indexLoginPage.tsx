import * as React from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {View, Text, Image, ImageBackground} from 'react-native';
import CustomButton from '../../components/Button/indexButton';
import CustomTextInput from '../../components/TextInput/indexTextInput';
import theme from '../../global/theme';
import {RootStackParamList} from '../../router/Router';
import {stylesLoginPage} from './stylesLoginPage';
import auth from '@react-native-firebase/auth';

type ScreenProps = DrawerScreenProps<RootStackParamList, 'LoginPage'>;

const LoginPage: React.FC<ScreenProps> = props => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeEmail = (event: string) => {
    setEmail(event);
  };

  const handleChangePassword = (event: string) => {
    setPassword(event);
  };

  const loginApp = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('entrou');
        setLoading(false);
      })
      .catch(e => {
        console.log('erro');
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <ImageBackground
      source={require('../../sources/backgroundLogin.png')}
      style={stylesLoginPage.backgroundImage}>
      <View style={stylesLoginPage.containerMain}>
        <View
          style={[
            stylesLoginPage.lineSeparator,
            stylesLoginPage.lineSeparatorTOP,
          ]}
        />
        <View style={stylesLoginPage.containerLogo}>
          <Image
            style={stylesLoginPage.Logo}
            source={require('../../sources/logoAPP.png')}
          />
          <Text style={stylesLoginPage.textLOGIN}>LOGIN</Text>
        </View>
        <View style={stylesLoginPage.containerInputs}>
          <CustomTextInput
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            onChangeText={e => {
              handleChangeEmail(e);
            }}
          />
          <CustomTextInput
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChangeText={e => {
              handleChangePassword(e);
            }}
          />
        </View>
        <View style={stylesLoginPage.containerButton}>
          <CustomButton
            title="Entrar"
            styleCustom={{
              borderRadius: 30,
              width: '50%',
              paddingTop: 6,
              paddingBottom: 6,
              backgrundColor: theme.colors.greenSecundary,
            }}
            onPress={() => {
              setLoading(true);
              loginApp();
            }}
            loading={loading}
          />
          <CustomButton
            title="Não tem conta? Crie uma nova agora."
            styleCustom={{
              borderRadius: 0,
              width: '100%',
              paddingTop: 12,
              paddingBottom: 6,
              backgrundColor: 'transparent',
              fontSize: 15,
              fontWeight: '400',
            }}
            onPress={() => {
              props.navigation.navigate('CreateAccountPage');
            }}
          />
        </View>
        <View
          style={[
            stylesLoginPage.lineSeparator,
            stylesLoginPage.lineSeparatorBOTTOM,
          ]}
        />
      </View>
    </ImageBackground>
  );
};

export default LoginPage;
