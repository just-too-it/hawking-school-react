import { INewsPreview } from "../NewsPreview/NewsPreview.types"

export type NewsListProps = {
    data: INewsPreview[];
    newsPerPage: number;
    currentPage: number;
}