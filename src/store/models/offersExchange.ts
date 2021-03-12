import { createModel } from "@rematch/core";
import { RootModel } from "."; 

const full = [
    {
        username: "Хитрый перец",
        city: 'Хабаровск',
        rating: "4.7",
    },
    {
        username: "Золотая рыбка",
        city: 'Самара',
        rating: "4.4",
    },
    {
        username: "Ранняя Пташка",
        city: 'Екатеринбург',
        rating: "4.1",
    },
]

const part = [
    {
        username: "Хитрый перец",
        city: 'Хабаровск',
        rating: "4.7",
    },
    {
        username: "Золотая рыбка",
        city: 'Самара',
        rating: "4.4",
    },
    {
        username: "Ранняя Пташка",
        city: 'Екатеринбург',
        rating: "4.1",
    },
]

const other = [
    {
        username: "Хитрый перец",
        city: 'Хабаровск',
        rating: "4.7",
    },
    {
        username: "Золотая рыбка",
        city: 'Самара',
        rating: "4.4",
    },
    {
        username: "Ранняя Пташка",
        city: 'Екатеринбург',
        rating: "4.1",
    },
]

const bookInfo =  [
    { category: "Год издания", value: "2007" },
    { category: "Обложка", value: "Оригинальная" },
    { category: "ISBN", value: "978-5-353-02907-6" },
    { category: "Экранизация", value: "Да" },
    { category: "Жанр", value: "Детские книги, Фантастика" },
    { category: "Язык издания", value: "Русский" },
    { category: "Состояние", value: "Хорошее" },
];

export const offersExchange = createModel<RootModel>()({
  state: {
    error: null,
    full,
    part,
    other,
    bookInfo,
  },
  reducers: {
  },
});
