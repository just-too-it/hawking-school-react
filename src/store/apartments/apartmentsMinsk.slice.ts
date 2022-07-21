import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApartmentListProps, RecommendationProps } from '../../components/ApartmentList/ApartmentListProps.types';
import { ApartmentCardProps } from '../../components/ApartmentCard/ApartmentCard.types';

const initialApartmentsMinskState: ApartmentListProps = {
  apartments: null,
  cardsPerPage: 6,
  currentPage: 1,
  isListMode: true,
  metro: '',
  district: '',
  recommendations: [],
};

export const apartmentsMinskSlice = createSlice({
  name: 'apartmentList',
  initialState: initialApartmentsMinskState,
  reducers: {
    setApartments(state, action: PayloadAction<ApartmentCardProps[]>) {
      state.apartments = action.payload;
    },
    setCardsPerPage(state, action: PayloadAction<number>) {
      state.cardsPerPage = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setIsListMode(state, action: PayloadAction<boolean>) {
      state.isListMode = action.payload;
    },
    setMetro(state, action: PayloadAction<string>) {
      state.metro = action.payload;
    },
    setDistrict(state, action: PayloadAction<string>) {
      state.district = action.payload;
    },
    setRecommendations(state, action: PayloadAction<RecommendationProps[]>) {
      state.recommendations = action.payload;
    },
  },
});

//export default newsSlice.reducer;
export const apartmentsMinskReducer = apartmentsMinskSlice.reducer;
export const apartmentsMinskActions = apartmentsMinskSlice.actions;
