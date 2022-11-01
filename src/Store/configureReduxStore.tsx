import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import reducers, {RootState} from './rootReducer';

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
