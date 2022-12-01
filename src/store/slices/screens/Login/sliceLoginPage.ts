import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IPropsLoginPageReducers {
  isLogged: boolean;
  user: string;
}

const initialState: IPropsLoginPageReducers = {
  isLogged: false,
  user: '',
};

const sliceLoginPage = createSlice({
  name: 'sliceLogin',
  initialState,
  reducers: {
    setDataLoginReducer(state, action: PayloadAction<IPropsLoginPageReducers>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setDataLogoutReducer(state) {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const {setDataLoginReducer, setDataLogoutReducer} =
  sliceLoginPage.actions;

export default sliceLoginPage.reducer;
