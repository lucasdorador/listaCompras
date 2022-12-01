import {AppThunk} from '../../../configureReduxStore';
import {
  IPropsLoginPageReducers,
  setDataLoginReducer,
  setDataLogoutReducer,
} from '../../../slices/screens/Login/sliceLoginPage';

export const setDataLogin =
  (dataLogin: IPropsLoginPageReducers): AppThunk =>
  dispatch => {
    dispatch(setDataLoginReducer(dataLogin));
  };

export const setDataLogout = (): AppThunk => dispatch => {
  dispatch(setDataLogoutReducer());
};
