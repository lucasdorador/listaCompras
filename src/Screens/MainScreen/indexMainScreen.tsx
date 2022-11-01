import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styleMainScreen} from './styleMainScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../global/theme';
import CardList from '../../Components/CardList/indexCardList';
import {useAppSelector} from '../../hooks/react-hooks-redux';

const MainScreen: React.FC = () => {
  const cards = useAppSelector(state => state.cards);

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
      <ScrollView style={styleMainScreen.bodyCards}>
        {cards &&
          cards.length > 0 &&
          cards.map(card => (
            <CardList
              key={card.id}
              id={card.id}
              description={card.description}
              maxElements={card.maxElements}
              totalElementsSelected={card.totalElementsSelected}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
