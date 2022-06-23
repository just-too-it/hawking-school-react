import { IItemNav } from '../../components/Header/Nav/Nav.types';
import { IItemSubNav } from '../../components/Header/SubNav/SubNav.type';
import { PagesLinks } from './pagesLinks.constant';

export const Menu: IItemNav[] = [
  { title: 'Главная', link: PagesLinks.MAIN_PAGE },
  { title: 'Новости', link: PagesLinks.NEWS_PAGE },
  { title: 'Размещение и тарифы', link: PagesLinks.RATES_PAGE },
  { title: 'Объявления на карте', link: PagesLinks.MAPS_PAGE },
  { title: 'Контакты', link: PagesLinks.CONTACTS_PAGE },
];

export const SubMenu: IItemSubNav[] = [
  {
    title: 'Квартиры на сутки',
    list: [
      { title: 'Квартиры на сутки в Минске', link: PagesLinks.APARTMENTS_MINSK_PAGE },
      { title: 'Квартиры на сутки в Гомеле', link: PagesLinks.APARTMENTS_GOMEL_PAGE },
      { title: 'Квартиры на сутки в Бресте', link: PagesLinks.APARTMENTS_BREST_PAGE },
      { title: 'Квартиры на сутки в Витебске', link: PagesLinks.APARTMENTS_VITEBSK_PAGE },
      { title: 'Квартиры на сутки в Гродно', link: PagesLinks.APARTMENTS_GRODNO_PAGE },
      { title: 'Квартиры на сутки в Могилеве', link: PagesLinks.APARTMENTS_MOGILEV_PAGE },
    ],
  },
  { title: 'Коттеджи и усадьбы', link: PagesLinks.COTTAGES_PAGE },
  { title: 'Бани и Сауны', link: PagesLinks.SAUNAS_PAGE },
  { title: 'Авто напрокат', link: PagesLinks.AUTO_PAGE },
];

export const FooterMenu: IItemSubNav[] = [
    { title: 'Коттеджи и усадьбы', link: PagesLinks.COTTAGES_PAGE },
    { title: 'Бани и Сауны', link: PagesLinks.SAUNAS_PAGE },
    { title: 'Авто напрокат', link: PagesLinks.AUTO_PAGE },
    {
      title: 'Квартиры',
      list: [
        { title: 'Квартиры в Минске', link: PagesLinks.APARTMENTS_MINSK_PAGE },
        { title: 'Квартиры в Гомеле', link: PagesLinks.APARTMENTS_GOMEL_PAGE },
        { title: 'Квартиры в Бресте', link: PagesLinks.APARTMENTS_BREST_PAGE },
        { title: 'Квартиры в Витебске', link: PagesLinks.APARTMENTS_VITEBSK_PAGE },
        { title: 'Квартиры в Гродно', link: PagesLinks.APARTMENTS_GRODNO_PAGE },
        { title: 'Квартиры в Могилеве', link: PagesLinks.APARTMENTS_MOGILEV_PAGE },
      ],
    },
  ];