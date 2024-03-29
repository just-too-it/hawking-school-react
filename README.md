# Курсовой проект Hawking School  
Курсовой проект по стажировке "Frontend-разработка" от Hawking School.  

## Описание  
Сервис по аренде недвижимости. В рамках курсовой работы задача была реализовать только несколько страниц, поэтому часть ссылок - это заглушки.  
Реализован интерфейс для следующих страниц:

* Главная (https://hawking-school-react.vercel.app)
    - во всех фильрах/ссылках где задействован город "Минск" произойдет переход на соответствующую страницу. для остальных городов отдельных страниц нет.
    - в блоке "Аренда квартир в Минске" работающий фильтр по метро и району. При клике на кнопку "Посмотреть все" осуществляется переход на страницу аренды квартир в Минске.
    - блок с новостями тоже рабочий - переход или на отдельную новость, или на весь список.

* Аренда квартир в Минске (https://hawking-school-react.vercel.app/apartments/minsk)
    - при клике на "больше опций" раскрывается дополнительное меню
    - работает фильтрация и сортировка объектов. все реализовано на фронте, тк бэка не было
    - переключается внешний вид карточек (список и плитка)
    - работает пагинация

* Новости (https://hawking-school-react.vercel.app/news)
    - с каждого анонса можно перейти на страницу новости
    - работает поиск по новостям (совпадения в заголовке или тексте)
    - работает пагинация

* Страница отдельной новости (напр., https://hawking-school-react.vercel.app/news/1)
    - можно расшарить страницу в соц.сетях

* Контакты (https://hawking-school-react.vercel.app/contacts)
    - через контактные данные можно отправить сообщение в разные мессенджеры
    - в форме реализована валидация при заполнении

* Вход и регистрация (https://hawking-school-react.vercel.app/login, https://hawking-school-react.vercel.app/registration)
    - формы с валидацией, без проверки авторизации
    - задействована reCaptcha

## Стек  
* React
* TypeScript
* SCSS
* CSS Modules
* Redux Toolkit
* Formik
* Swiper
* axios-mock-adapter (альтернатива для отсутствующего бэка)

## Установка и запуск  
### Установка
`npm install`
Устанавливает зависимости в `package.json` файле.

### Запуск приложения  
`npm start`
Запускает приложение в режиме разработки.  
Чтобы просмотреть его в браузере, откройте <http://localhost:3000 >. Страница автоматически перезагрузится, если вы внесете изменения в код.


## Deploy  
https://hawking-school-react.vercel.app/

