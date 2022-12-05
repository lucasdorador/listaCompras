import {AppThunk} from '../../../configureReduxStore';
import {
  addNewCardsReducer,
  alterCardsReducer,
  deleteCardsReducer,
  IPropsCard,
} from '../../../slices/components/Cards/sliceCards';

export const addNewCard =
  (card: IPropsCard): AppThunk =>
  (dispatch, getState) => {
    const newCards = [];

    newCards.push(...getState().cards.items);

    if (!getState().cards.items.some(el => el.id === card.id)) {
      newCards.push(card);
    }

    dispatch(addNewCardsReducer(newCards));
  };

export const alterCards =
  (card: IPropsCard): AppThunk =>
  (dispatch, getState) => {
    const oldCards = [];

    oldCards.push(...getState().cards.items);

    const newCards = oldCards.filter(_card => _card.id !== card.id);

    newCards.push(card);

    dispatch(alterCardsReducer(newCards));
  };

export const deleteCard =
  (card: IPropsCard): AppThunk =>
  (dispatch, getState) => {
    const oldCards = [];

    oldCards.push(...getState().cards.items);

    const newCards = oldCards.filter(_card => _card.id !== card.id);

    dispatch(deleteCardsReducer(newCards));
  };
