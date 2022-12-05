import React from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {styleHomePage} from './styleHomePage';
import theme from '../../global/theme';
import CardList from '../../components/CardList/indexCardList';
import {useAppDispatch, useAppSelector} from '../../hooks/react-hooks-redux';
import EditLongPressCard from '../../components/EditLongPressCard/indexEditLongPressCard';
import {firabaseTables} from '../../constants/firebase';
import dbFirebase from '../../services/firebase';
import {
  addNewCard,
  alterCards,
  deleteCard,
} from '../../store/actions/components/Cards/actionCards';

const HomePage: React.FC = () => {
  const cards = useAppSelector(state => state.cards);
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const {open: openModalEditLongPressCard} = useAppSelector(
    state => state.modalEditLongPressCard,
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  React.useEffect(() => {
    const getDatabase = async () => {
      const db = await dbFirebase();

      const onAddValues = db
        .ref(firabaseTables.cards)
        .on('child_added', snapshot => {
          dispatch(addNewCard(snapshot.val()));
        });

      const onChangeValues = db
        .ref(firabaseTables.cards)
        .on('child_changed', snapshot => {
          dispatch(alterCards(snapshot.val()));
        });

      const onDeleteValues = db
        .ref(firabaseTables.cards)
        .on('child_removed', snapshot => {
          console.log('delete', snapshot);
          dispatch(deleteCard(snapshot.val()));
        });

      return () => {
        db.ref(firabaseTables.cards).off('child_added', onAddValues);
        db.ref(firabaseTables.cards).off('child_changed', onChangeValues);
        db.ref(firabaseTables.cards).off('child_removed', onDeleteValues);
      };
    };

    getDatabase();
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
          cards.items &&
          cards.items.length > 0 &&
          cards.items.map(card => <CardList key={card.id} card={card} />)}
      </ScrollView>
      {openModalEditLongPressCard && <EditLongPressCard />}
    </View>
  );
};

export default HomePage;
