import { ApartmentCardProps } from "../ApartmentCard/ApartmentCard.types";

export type RecommendationProps = {
    label: string;
    path: string;
}
export type ApartmentListProps = {
    apartments: ApartmentCardProps[];
    cardsPerPage: number;
    currentPage: number;
    isListMode?: boolean;
    metro?: string;
    district?: string;
    recommendations?: RecommendationProps[];
}