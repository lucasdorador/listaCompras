import {combineReducers} from '@reduxjs/toolkit';
import sliceCards from './Slices/Components/Cards/sliceCards';

const reducers = combineReducers({
  cards: sliceCards,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
