import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPropsCards} from '../Cards/sliceCards';

interface IPropsModalEditLongPressCard {
  open: boolean;
  cardClicked: IPropsCards;
}

const initialState: IPropsModalEditLongPressCard = {
  open: false,
  cardClicked: {
    description: '',
    id: '',
    maxElements: 0,
    totalElementsSelected: 0,
  },
};

const sliceModalEditLongPressCard = createSlice({
  name: 'sliceModalEditLongPressCard',
  initialState,
  reducers: {
    setOpenCloseModalEditLongPressCardReducer(
      state,
      action: PayloadAction<boolean>,
    ) {
      return {
        ...state,
        open: action.payload,
      };
    },
    setAlterCardClickedReducer(state, action: PayloadAction<IPropsCards>) {
      return {
        ...state,
        cardClicked: action.payload,
      };
    },
  },
});

export const {
  setOpenCloseModalEditLongPressCardReducer,
  setAlterCardClickedReducer,
} = sliceModalEditLongPressCard.actions;
export default sliceModalEditLongPressCard.reducer;
