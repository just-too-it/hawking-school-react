import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { ApartmentListProps } from "../../components/ApartmentList/ApartmentListProps.types";
import { ApartmentCardProps } from "../../components/ApartmentCard/ApartmentCard.types";

const initialApartmentListState: ApartmentListProps = {
    apartments: null,
    cardsPerPage: 3,
    currentPage: 1,
    isListMode: true,
    metro: '',
    district: ''
}

export const apartmentListSlice = createSlice({
    name: 'apartmentList',
    initialState: initialApartmentListState,
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
        }
    }
})

//export default newsSlice.reducer;
export const apartmentListReducer = apartmentListSlice.reducer;
export const apartmentListActions = apartmentListSlice.actions;