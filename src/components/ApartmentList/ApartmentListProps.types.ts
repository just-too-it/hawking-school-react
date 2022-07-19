import { ApartmentCardProps } from "../ApartmentCard/ApartmentCard.types";

export type ApartmentListProps = {
    apartments: ApartmentCardProps[];
    cardsPerPage: number;
    currentPage: number;
    isListMode: boolean;
    metro?: string;
    district?: string;
}