import {combineReducers} from '@reduxjs/toolkit';
import sliceCards from './Slices/Components/Cards/sliceCards';
import sliceModalEditLongPressCard from './Slices/Components/ModalEditLongPressCard/sliceModalEditLongPressCard';

const reducers = combineReducers({
  cards: sliceCards,
  modalEditLongPressCard: sliceModalEditLongPressCard,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
