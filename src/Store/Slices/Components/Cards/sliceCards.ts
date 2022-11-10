import {createSlice} from '@reduxjs/toolkit';

export interface IPropsCards {
  id: string;
  description: string;
  maxElements: number;
  totalElementsSelected: number;
}

const initialState: IPropsCards[] = [
  {
    description: 'Compras do Mês',
    maxElements: 200,
    totalElementsSelected: 200,
    id: '100',
  },
  {
    description: 'Churrasco',
    maxElements: 30,
    totalElementsSelected: 10,
    id: '101',
  },
  {
    description: 'Compras da Casa',
    maxElements: 800,
    totalElementsSelected: 450,
    id: '102',
  },
  {
    description: 'Compras da Casa 2',
    maxElements: 10,
    totalElementsSelected: 5,
    id: '103',
  },
  {
    description: 'Compras da Casa 3',
    maxElements: 100,
    totalElementsSelected: 36,
    id: '104',
  },
  {
    description: 'Compras da Casa 4',
    maxElements: 200,
    totalElementsSelected: 105,
    id: '105',
  },
  {
    description: 'Compras da Casa 5',
    maxElements: 123,
    totalElementsSelected: 12,
    id: '106',
  },
];

export const SliceCards = createSlice({
  name: 'sliceCards',
  initialState,
  reducers: {},
});

export default SliceCards.reducer;
