import { createModel } from "@rematch/core";
import { RootModel } from "."; 

//Все данные демонстрационные, для наглядности. В прод будут поступать с Api
const bookInfo =  [
        { 
          id: 1, 
          info : {
            status: 3,
            title: "Книга #234",
            lines : [  
                      {category: "Жанр", value: "Детектив" },
                      { category: "Экранизация", value: "Да" },
                      { category: "Состояние", value: "Хорошее" },
                      { category: "Язык издания", value: "Англиский" },
                    ], 
            user: [
                      { category: "Пользователь", value: "Хитрый перец" },
                      { category: "Город", value: "Хабаровск" },
                      { category: "Рейтинг", value: "4.7" },
                    ],
            city: "Орёл",
            rating: "4.9"
            },
          book : {
            title: "Джоан Роулинг “Гарри Поттер и Дары Смерти”",
            status: 4,
            lines : [  
                      {category: "Год издания", value: "2007" },
                      { category: "Обложка", value: "Оригинальная" },
                      { category: "ISBN", value: "978-5-353-02907-6" },
                      { category: "Экранизация", value: "Да" },
                      { category: "Жанр", value: "Детские книги, Фантастика" },
                      { category: "Язык издания", value: "Русский" },
                      { category: "Состояние", value: "Хорошее" },
                    ], 
            },
        },
        { 
          id: 2, 
          info : {
            status: 3,
            title: "Книга #125",
            lines : [  
                      {category: "Жанр", value: "Детектив" },
                      { category: "Экранизация", value: "Да" },
                      { category: "Состояние", value: "Хорошее" },
                      { category: "Язык издания", value: "Англиский" },
                    ], 
            user: [
                        { category: "Пользователь", value: "Хитрый перец" },
                        { category: "Город", value: "Хабаровск" },
                        { category: "Рейтинг", value: "4.7" },
                    ],
            city: "Хабаровск",
            rating: "4.6"
            },
          book : {
            title: "Джоан Роулинг “Гарри Поттер и Дары Смерти”",
            status: 4,
            lines : [  
                      {category: "Год издания", value: "2007" },
                      { category: "Обложка", value: "Оригинальная" },
                      { category: "ISBN", value: "978-5-353-02907-6" },
                      { category: "Экранизация", value: "Да" },
                      { category: "Жанр", value: "Детские книги, Фантастика" },
                      { category: "Язык издания", value: "Русский" },
                      { category: "Состояние", value: "Хорошее" },
                    ], 
            },
        },
   
];

export const offersExchange = createModel<RootModel>()({
  state: {
    error: null,
    bookInfo,
  },
  reducers: {
  },
});
