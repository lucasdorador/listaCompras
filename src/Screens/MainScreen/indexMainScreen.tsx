import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styleMainScreen} from './styleMainScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../global/theme';
import CardList from '../../Components/CardList/indexCardList';

const MainScreen: React.FC = () => {
  return (
    <SafeAreaView style={styleMainScreen.container}>
      <View style={styleMainScreen.header}>
        <Icon
          onPress={() => console.log('teste')}
          name="menu"
          size={40}
          color={theme.colors.white}
        />
        <Text style={styleMainScreen.titleText}> MINHAS LISTAS </Text>
      </View>
      <View style={styleMainScreen.bodyCards}>
        <CardList />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
