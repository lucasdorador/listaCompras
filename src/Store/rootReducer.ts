import {combineReducers} from '@reduxjs/toolkit';
import sliceCards from './slices/components/Cards/sliceCards';
import sliceModalEditLongPressCard from './slices/components/ModalEditLongPressCard/sliceModalEditLongPressCard';
import sliceLoginPage from './slices/screens/Login/sliceLoginPage';

const reducers = combineReducers({
  cards: sliceCards,
  modalEditLongPressCard: sliceModalEditLongPressCard,
  loginPage: sliceLoginPage,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
