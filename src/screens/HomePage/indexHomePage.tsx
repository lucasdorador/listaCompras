import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {styleHomePage} from './styleHomePage';
import theme from '../../global/theme';
import CardList from '../../components/CardList/indexCardList';
import {useAppSelector} from '../../hooks/react-hooks-redux';
import EditLongPressCard from '../../components/EditLongPressCard/indexEditLongPressCard';

const HomePage: React.FC = () => {
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
    <View style={styleHomePage.container}>
      <ScrollView
        style={styleHomePage.bodyCards}
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
    </View>
  );
};

export default HomePage;
