import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApartmentCardProps } from '../../components/ApartmentCard/ApartmentCard.types';
import { ApartmentsMinskProps } from '../../views/pages/ApartmentsMinsk/ApartmentsMinsk.types';
import { RecommendationProps } from '../../views/pages/ApartmentsMinsk/Recommendations/Recommendations.types';


const initialApartmentsMinskState: ApartmentsMinskProps = {
  apartments: null,
  cardsPerPage: 6,
  currentPage: 1,
  isListMode: true,
  city: 'Минск',
  metro: '',
  district: '',
  recommendations: [],
  rooms: '',
  priceFrom: '',
  priceTo: '',
  peopleCount: ''
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
    setRooms(state, action: PayloadAction<number|string>) {
      state.rooms = action.payload;
    },
    setPriceFrom(state, action: PayloadAction<number|string>) {
      state.priceFrom = action.payload;
    },
    setPriceTo(state, action: PayloadAction<number|string>) {
      state.priceTo = action.payload;
    },
    setPeopleCount(state, action: PayloadAction<number|string>) {
      state.peopleCount = action.payload;
    },
  },
});

export const apartmentsMinskReducer = apartmentsMinskSlice.reducer;
export const apartmentsMinskActions = apartmentsMinskSlice.actions;
