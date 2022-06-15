import { IBreadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs.types";
import { INewsPreview } from "../../components/NewsPreview/NewsPreview.types"; 
import { ISelector } from "../../components/UI/SSelect/SSelector.types";
import { PagesLinks } from "../constants/pagesLinks.constant";
import room from '../../assets/images/room.jpg'

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

export const news: INewsPreview[] = []

for (let index = 0; index < 20; index++) {
    news.push({
        id: index+1,
        img: room,
        title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
        description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А бла-бла-бла',
        date: new Date(2008, 0, 14)
    })
}