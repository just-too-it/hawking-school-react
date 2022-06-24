import { INewsPreview } from "../NewsPreview/NewsPreview.types"

export interface INewsList {
    data: INewsPreview[];
    newsPerPage: number;
    currentPage: number;
}