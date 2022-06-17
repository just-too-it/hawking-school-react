import { INewsPreview } from "../NewsPreview/NewsPreview.types"

export interface INewsList {
    newsPreviews: INewsPreview[];
    newsPerPage: number;
}