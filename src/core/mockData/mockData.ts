import { IBreadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs.types";
import { ISelector } from "../../components/UI/SSelect/SSelector.types";
import { PagesLinks } from "../constants/pagesLinks.constant";

export const chooseCity: ISelector = {
    title: 'Выбор города',
    list: [
        {id: 1, value: 'Минск'},
        {id: 2, value: 'Город 2'},
        {id: 3, value: 'Город 3'},
        {id: 4, value: 'Город 4'},
        {id: 5, value: 'Город 5'}
    ]
}

export const breadcrumbsForNews: IBreadcrumbs[] = [
    {
        title: 'Новости',
        link: PagesLinks.NEWS_PAGE
    },
    ]