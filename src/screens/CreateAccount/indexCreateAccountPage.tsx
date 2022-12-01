import {DrawerScreenProps} from '@react-navigation/drawer';
import {View, Text, Image, ImageBackground} from 'react-native';
import CustomButton from '../../components/Button/indexButton';
import CustomTextInput from '../../components/TextInput/indexTextInput';
import theme from '../../global/theme';
import {RootStackParamList} from '../../router/Router';
import {stylesCreateAccountPage} from './stylesCreateAccountPage';
import auth from '@react-native-firebase/auth';
import React from 'react';

type ScreenProps = DrawerScreenProps<RootStackParamList, 'CreateAccountPage'>;

const CreateAccountPage: React.FC<ScreenProps> = props => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeEmail = (event: string) => {
    setEmail(event);
  };

  const handleChangePassword = (event: string) => {
    setPassword(event);
  };

  const createAccountFirebase = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);

        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <ImageBackground
      source={require('../../sources/backgroundCreateAccount.png')}
      style={stylesCreateAccountPage.backgroundImage}>
      <View style={stylesCreateAccountPage.containerMain}>
        <View
          style={[
            stylesCreateAccountPage.lineSeparator,
            stylesCreateAccountPage.lineSeparatorTOP,
          ]}
        />
        <View style={stylesCreateAccountPage.containerLogo}>
          <Image
            style={stylesCreateAccountPage.Logo}
            source={require('../../sources/CreateAcc.png')}
          />
          <Text style={stylesCreateAccountPage.textLOGIN}>
            CRIA A SUA CONTA
          </Text>
        </View>
        <View style={stylesCreateAccountPage.containerInputs}>
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
        <View style={stylesCreateAccountPage.containerButton}>
          <CustomButton
            title="Criar a conta"
            styleCustom={{
              borderRadius: 30,
              width: '50%',
              paddingTop: 6,
              paddingBottom: 6,
              backgrundColor: theme.colors.greenSecundary,
            }}
            onPress={() => {
              createAccountFirebase();
            }}
            loading={loading}
          />
          <CustomButton
            title="Voltar para o Login."
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
              props.navigation.navigate('LoginPage');
            }}
          />
        </View>
        <View
          style={[
            stylesCreateAccountPage.lineSeparator,
            stylesCreateAccountPage.lineSeparatorBOTTOM,
          ]}
        />
      </View>
    </ImageBackground>
  );
};

export default CreateAccountPage;
