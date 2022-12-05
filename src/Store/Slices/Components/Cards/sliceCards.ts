import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IPropsCard {
  id: string;
  description: string;
  maxElements: number;
  totalElementsSelected: number;
  createdAt: string;
  updatedAt: string;
}

interface IPropsCards {
  items: IPropsCard[];
}

const initialState: IPropsCards = {
  items: [],
};

export const SliceCards = createSlice({
  name: 'sliceCards',
  initialState,
  reducers: {
    addNewCardsReducer(state, action: PayloadAction<IPropsCard[]>) {
      return {
        ...state,
        items: action.payload.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      };
    },
    alterCardsReducer(state, action: PayloadAction<IPropsCard[]>) {
      return {
        ...state,
        items: action.payload.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      };
    },
    deleteCardsReducer(state, action: PayloadAction<IPropsCard[]>) {
      return {
        ...state,
        items: action.payload.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      };
    },
  },
});

export const {addNewCardsReducer, alterCardsReducer, deleteCardsReducer} =
  SliceCards.actions;

export default SliceCards.reducer;
