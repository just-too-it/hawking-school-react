import { IBreadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.types';
import { INewsPreview } from '../../components/NewsPreview/NewsPreview.types';
import { ISelector } from '../../components/UI/SSelect/SSelector.types';
import { PagesLinks } from '../constants/pagesLinks.constant';
import room from '../../assets/images/room.jpg';
import { INewsItem } from '../../views/pages/NewsItem/NewsItem.types';

export const chooseCity: ISelector = {
  title: 'Выберите',
  list: [
    { id: 1, value: 'Минск' },
    { id: 2, value: 'Город 2' },
    { id: 3, value: 'Город 3' },
    { id: 4, value: 'Город 4' },
    { id: 5, value: 'Город 5' },
  ],
};

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