import React, {useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styleMainScreen} from './styleMainScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../global/theme';
import CardList from '../../Components/CardList/indexCardList';
import {useAppSelector} from '../../hooks/react-hooks-redux';
import EditLongPressCard from '../../Components/EditLongPressCard/indexEditLongPressCard';
import {IPropsCards} from '../../Store/Slices/Components/Cards/sliceCards';

const MainScreen: React.FC = () => {
  const cards = useAppSelector(state => state.cards);
  const [refreshing, setRefreshing] = React.useState(false);

  const {open: openModalEditLongPressCard} = useAppSelector(
    state => state.modalEditLongPressCard,
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

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
      <ScrollView
        style={styleMainScreen.bodyCards}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={theme.colors.white}
            colors={[theme.colors.greenPrimary]}
          />
        }>
        {cards &&
          cards.length > 0 &&
          cards.map(card => <CardList key={card.id} card={card} />)}
      </ScrollView>
      {openModalEditLongPressCard && <EditLongPressCard />}
    </SafeAreaView>
  );
};

export default MainScreen;
