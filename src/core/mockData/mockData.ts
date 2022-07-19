import { IBreadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.types';
import { INewsPreview } from '../../components/NewsPreview/NewsPreview.types';
import { PagesLinks } from '../constants/pagesLinks.constant';
import room from '../../assets/images/room.jpg';
import room1 from '../../assets/images/room1.jpg';
import room2 from '../../assets/images/room2.jpg';
import owner from '../../assets/images/owner.jpg';
import { INewsItem } from '../../views/pages/NewsItem/NewsItem.types';
import { SelectorProps } from '../../components/UI/SSelector/SSelector.types';
import { PromoCardProps } from '../../components/Promo/PromoCard/PromoCard.types';
import promoApart from '../../assets/images/promo-apart.jpg';
import promoCott from '../../assets/images/promo-cott.jpg';
import promoSauna from '../../assets/images/promo-sauna.jpg';
import promoAuto from '../../assets/images/promo-auto.jpg'
import { PopularListProps } from '../../components/PopularList/PopularList.types';
import { ApartmentCardProps } from '../../components/ApartmentCard/ApartmentCard.types';

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
    `Чем заняться в выходные?${index} Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А бла-бла-бла`,
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
      `Чем заняться в выходные?${index + 1} Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А бла-бла-бла`,
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


export const popularApartmentsList: PopularListProps = {
  title: 'Квартиры',
  list: [
    {
      label: 'Квартиры в Минске',
      link: PagesLinks.APARTMENTS_MINSK_PAGE,
      count: 3567
    },
    {
      label: 'Квартиры в Гомеле',
      link: PagesLinks.APARTMENTS_GOMEL_PAGE,
      count: 2032
    },
    {
      label: 'Квартиры в Гродно',
      link: PagesLinks.APARTMENTS_GRODNO_PAGE,
      count: 2302
    },
    {
      label: 'Квартиры в Могилеве',
      link: PagesLinks.APARTMENTS_MOGILEV_PAGE,
      count: 110
    },
    {
      label: 'Квартиры в Бресте',
      link: PagesLinks.APARTMENTS_BREST_PAGE,
      count: 110
    },
    {
      label: 'Квартиры в Витебске',
      link: PagesLinks.APARTMENTS_VITEBSK_PAGE,
      count: 110
    }
  ],
  limit: 6
}

export const popularCottageList: PopularListProps = {
  title: 'Коттеджи и усадьбы',
  list: [
    {
      label: 'Агроусадьбы',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Коттеджи',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Загородный комплекс',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Базы отдыха',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Агроусадьбы2',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Коттеджи2',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Загородный комплекс2',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Базы отдыха2',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Агроусадьбы3',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Коттеджи3',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Загородный комплекс3',
      link: '/mock-link',
      count: 110
    },
    {
      label: 'Базы отдыха3',
      link: '/mock-link',
      count: 110
    }
  ],
  limit: 4
}

export const popularDestinationsList: PopularListProps = {
  title: 'Популярные направления',
  list: [
    {
      label: 'Коттеджи и усадьбы на о. Брасласких',
      link: '/mock-link',
    },
    {
      label: 'Коттеджи и усадьбы (жилье) на Нарочи',
      link: '/mock-link',
    },
    {
      label: 'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере',
      link: '/mock-link',
    },
  ],
  limit: 3
}

const apartmentCard: ApartmentCardProps = {
  id: 0,
  title: '4-комн. апартаменты на Грушевке',
  address: {
    city: 'Минск',
    street: 'б-р Мулявина, д. 10',
    metro: 'Грушевка',
    district: 'Шабаны',
  },
  img: [room1],
  status: 'Gold',
  price: 65.00,
  peopleCount: 4,
  peopleCountByRoom: '(2+2)',
  rooms: '4 комн.',
  square: 179,
  description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, ',
  owner: {
    name: 'Dmitriy',
    phone: '+375 (29) 291-14-44',
    email: 'vladimir6234@tut.by',
    img: owner,
    status: 'Владелец'
  }
}

export const apartmentsList: ApartmentCardProps[] = [];

for (let i=1; i <= 10; i++) {
  apartmentsList.push({...apartmentCard, id: i})
}

export const metroMinskList: SelectorProps[] = [
  { id: 1, value: 'Борисовский тракт' },
  { id: 2, value: 'Московская' },
  { id: 3, value: 'Академия наук' },
  { id: 4, value: 'Площадь Победы' },
  { id: 5, value: 'Михалово' },
  { id: 6, value: 'Грушевка' },
];

export const districtsMinskList: SelectorProps[] = [
  { id: 1, value: 'Шабаны' },
  { id: 2, value: 'Советский' },
  { id: 3, value: 'Заводской' },
  { id: 4, value: 'Ленинский' },
  { id: 5, value: 'Октябрьский' },
  { id: 6, value: 'Фрунзенский' },
];


export const apartmentsMinsk: ApartmentCardProps[] = [
  {
    id: 0,
    title: '4-комн. апартаменты на Грушевке',
    address: {
      city: 'Минск',
      street: 'б-р Мулявина, д. 10',
      metro: 'Грушевка',
      district: 'Шабаны',
    },
    img: [room1],
    status: 'Gold',
    price: 65.00,
    peopleCount: 4,
    peopleCountByRoom: '(2+2)',
    rooms: '4 комн.',
    square: 179,
    description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, ',
    owner: {
      name: 'Dmitriy',
      phone: '+375 (29) 291-14-44',
      email: 'vladimir6234@tut.by',
      img: owner,
      status: 'Владелец'
    }
  },
  {
    id: 1,
    title: '3-комн. апартаменты на Московской',
    address: {
      city: 'Минск',
      street: 'б-р Мулявина, д. 10',
      metro: 'Московская',
      district: 'Шабаны',
    },
    img: [room1],
    status: 'Gold',
    price: 40.00,
    peopleCount: 3,
    peopleCountByRoom: '(2+1)',
    rooms: '3 комн.',
    square: 140,
    description: 'Большая 3х комн студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, ',
    owner: {
      name: 'Dmitriy',
      phone: '+375 (29) 291-14-44',
      email: 'vladimir6234@tut.by',
      img: owner,
      status: 'Владелец'
    }
  },
  {
    id: 3,
    title: '4-комн. апартаменты на Грушевке',
    address: {
      city: 'Минск',
      street: 'б-р Мулявина, д. 10',
      metro: 'Грушевка',
      district: 'Шабаны',
    },
    img: [room1],
    status: 'Gold',
    price: 65.00,
    peopleCount: 4,
    peopleCountByRoom: '(2+2)',
    rooms: '4 комн.',
    square: 179,
    description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, ',
    owner: {
      name: 'Dmitriy',
      phone: '+375 (29) 291-14-44',
      email: 'vladimir6234@tut.by',
      img: owner,
      status: 'Владелец'
    }
  },
  {
    id: 4,
    title: '3-комн. апартаменты на Московской',
    address: {
      city: 'Минск',
      street: 'б-р Мулявина, д. 10',
      metro: 'Московская',
      district: 'Шабаны',
    },
    img: [room1],
    status: 'Gold',
    price: 40.00,
    peopleCount: 3,
    peopleCountByRoom: '(2+1)',
    rooms: '3 комн.',
    square: 140,
    description: 'Большая 3х комн студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, ',
    owner: {
      name: 'Dmitriy',
      phone: '+375 (29) 291-14-44',
      email: 'vladimir6234@tut.by',
      img: owner,
      status: 'Владелец'
    }
  }
] 