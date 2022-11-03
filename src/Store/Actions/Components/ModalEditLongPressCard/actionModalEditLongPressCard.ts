import {AppThunk} from '../../../configureReduxStore';
import {IPropsCards} from '../../../Slices/Components/Cards/sliceCards';
import {
  setAlterCardClickedReducer,
  setOpenCloseModalEditLongPressCardReducer,
} from '../../../Slices/Components/ModalEditLongPressCard/sliceModalEditLongPressCard';

export const openCloseModalEditLongPressCard =
  (state: boolean): AppThunk =>
  dispatch => {
    dispatch(setOpenCloseModalEditLongPressCardReducer(state));

    if (!state) {
      dispatch(
        setAlterCardClicked({
          description: '',
          id: '',
          maxElements: 0,
          totalElementsSelected: 0,
        }),
      );
    }
  };

export const setAlterCardClicked =
  (card: IPropsCards): AppThunk =>
  dispatch => {
    dispatch(setAlterCardClickedReducer(card));
  };
