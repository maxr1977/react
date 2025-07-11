# React домашнее задание 21


## Задание 1: Создание React-приложения с анкетой.

1. Создание нового React-приложения
- Создайте новое React-приложение с помощью Create React App.
- Перейдите в созданную директорию.
- Установите необходимые зависимости для Redux и Redux Toolkit:
    - `npm install @reduxjs/toolkit react-redux redux`

2. Настройка структуры проекта
- Создайте папку `components` внутри папки `src`. В этой папке будут находиться все компоненты нашего приложения.
- Создайте папку `features` внутри папки `src`. В этой папке будут находиться все срезы состояния (slices) для Redux.
- Внутри папки `features` создайте папку `questionnaire`, которая будет содержать срез состояния для анкеты.

3. Создание среза состояния с использованием Redux Toolkit
- В папке `questionnaire` создайте файл `questionnaireSlice.js`.
- Определите начальное состояние, содержащее вопросы анкеты, варианты ответов и результат.
- Создайте срез состояния с помощью `createSlice` из Redux Toolkit. В срезе определите действия для ответа на вопрос и отправки ответов.

4. Настройка Redux Store
- В корне папки `src` создайте файл `store.js`.
- Сконфигурируйте Redux Store с использованием `configureStore` из Redux Toolkit и подключите созданный срез состояния.

5. Настройка провайдера Redux
- В файле `index.js` импортируйте `Provider` из `react-redux` и подключите Redux Store к приложению, обернув компонент `App` в `Provider`.

6. Создание компонентов
- В папке `components` создайте файл `Question.js`.
    - Этот компонент должен отображать вопрос и два варианта ответа. Он должен использовать `useDispatch` и `useSelector` из `react-redux` для управления состоянием и выбора ответов.
- В папке `components` создайте файл `Result.js`.
    - Этот компонент должен отображать результат после отправки анкеты. Он должен использовать `useSelector` для получения результата из состояния.
- Создайте файл `App.js` в папке `src`.
    - В этом компоненте должен быть список вопросов, кнопка для отправки ответов и компонент для отображения результата. Используйте `useDispatch` для отправки анкеты.

7. Импорт и использование компонентов в `App.js`
- Импортируйте компоненты `Question` и `Result` в `App.js`.
- Отобразите все вопросы, используя компонент `Question`, и добавьте кнопку для отправки ответов.
- Добавьте компонент `Result` для отображения результата после отправки анкеты.

8. Стилизация приложения*
- Используйте CSS-модули для стилизации компонентов.
- Создайте CSS-файлы для каждого компонента и определите стили для элементов внутри компонентов.
- Импортируйте и примените созданные стили к компонентам.


![скриншот](./Gifka.gif)

![скриншот](./img01.png)

