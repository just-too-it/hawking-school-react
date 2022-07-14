import { IBreadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.types';
import { INewsPreview } from '../../components/NewsPreview/NewsPreview.types';
import { PagesLinks } from '../constants/pagesLinks.constant';
import room from '../../assets/images/room.jpg';
import { INewsItem } from '../../views/pages/NewsItem/NewsItem.types';
import { SelectorProps } from '../../components/UI/SSelector/SSelector.types';
import { PromoCardProps } from '../../components/Promo/PromoCard/PromoCard.types';
import promoApart from '../../assets/images/promo-apart.jpg';
import promoCott from '../../assets/images/promo-cott.jpg';
import promoSauna from '../../assets/images/promo-sauna.jpg';
import promoAuto from '../../assets/images/promo-auto.jpg'

/* export const chooseCity: ISelector = {
  title: 'Выберите',
  list: [
    { id: 1, value: 'Минск' },
    { id: 2, value: 'Гомель' },
    { id: 3, value: 'Брест' },
    { id: 4, value: 'Витебск' },
    { id: 5, value: 'Гродно' },
    { id: 6, value: 'Могилев' }
  ],
}; */

export const breadcrumbsForNews: IBreadcrumbs[] = [
  {
    title: 'Новости',
    link: PagesLinks.NEWS_PAGE,
  },
];

export const breadcrumbsForNewsItem: IBreadcrumbs[] = [
  {
    title: 'Новости',
    link: PagesLinks.NEWS_PAGE,
  },
  {
    title: 'Линия Сталина: суровый отдых в усадьбах на сутки ',
    link: PagesLinks.NEWS_PAGE,
  },
];

export const news: INewsPreview[] = [];

for (let index = 0; index < 20; index++) {
  news.push({
    id: index + 1,
    img: room,
    title: `Линия${index + 1} Сталина: суровый отдых в усадьбах на сутки`,
    description:
      'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А бла-бла-бла',
    date: new Date(2008, 0, 14),
  });
}

/* export const newsList: INewsList = {
  data: news,
  newsPerPage: 9,
  currentPage: 1
};
 */

export const newsItems: INewsItem[] = [];

for (let index = 0; index < 20; index++) {
  newsItems.push({
    id: index + 1,
    img: room,
    title: `Линия${index + 1} Сталина: суровый отдых в усадьбах на сутки`,
    description:
      'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А бла-бла-бла',
    date: new Date(2008, 0, 14),
    text: '<p>Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.</p><p>«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.</p><p>Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день. Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке. Проголодались? Загляните в кафе и насладитесь сытным домашним обедом.</p><p>Посетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже. На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант. Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!</p><p>Отличная усадьба в 10 км от "Линии Сталина".</p>',
  });
}

/* export const rooms2: ISelector = {
  title: 'Выберите',
  list: [
    {
      id: 1,
      value: '1 комн.'
    },
    {
      id: 2,
      value: '2 комн.'
    },
    {
      id: 3,
      value: '3 комн.'
    },
    {
      id: 4,
      value: '4 комн.'
    },
    {
      id: 5,
      value: '5 комн.'
    },
  ]
  
} */

export const roomsList: SelectorProps[] = [
  {
    id: 1,
    value: '1 комн.',
  },
  {
    id: 2,
    value: '2 комн.',
  },
  {
    id: 3,
    value: '3 комн.',
  },
  {
    id: 4,
    value: '4 комн.',
  },
  {
    id: 5,
    value: '5 комн.',
  },
];

export const citysList: SelectorProps[] = [
  { id: 1, value: 'Минск' },
  { id: 2, value: 'Гомель' },
  { id: 3, value: 'Брест' },
  { id: 4, value: 'Витебск' },
  { id: 5, value: 'Гродно' },
  { id: 6, value: 'Могилев' },
];

export const promoCards: PromoCardProps[] = [
  {
    title: 'Квартиры на сутки',
    description: 'снять квартиру',
    tags: [
      {
        label: 'Минск',
        link: PagesLinks.APARTMENTS_MINSK_PAGE,
      },
      {
        label: 'Витебск',
        link: PagesLinks.APARTMENTS_VITEBSK_PAGE,
      },
      {
        label: 'Гродно',
        link: PagesLinks.APARTMENTS_GRODNO_PAGE,
      },
      {
        label: 'Гомель',
        link: PagesLinks.APARTMENTS_GOMEL_PAGE,
      },
      {
        label: 'Брест',
        link: PagesLinks.APARTMENTS_BREST_PAGE,
      },
      {
        label: 'Могилев',
        link: PagesLinks.APARTMENTS_MOGILEV_PAGE,
      },
    ],
    img: promoApart,
    mode: 'wide'
  },
  {
    title: 'Коттеджи и усадьбы',
    description: 'СНЯТЬ коттедж НА ПРАЗДНИК',
    img: promoCott,
    iconLink: PagesLinks.COTTAGES_PAGE,
    mode: 'normal'
  },
  {
    title: 'Бани и сауны',
    description: 'ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ',
    img: promoSauna,
    iconLink: PagesLinks.SAUNAS_PAGE,
    mode: 'normal'
  },
  {
    title: 'Авто на прокат',
    description: 'еСЛИ СРОЧНО НУЖНА МАШИНА',
    img: promoAuto,
    iconLink: PagesLinks.AUTO_PAGE,
    mode: 'wide'
  }
]
