import { createModel } from "@rematch/core";
import { RootModel } from "."; 

const list =  [
  { 
    id: 1, 
    status: "Ожидает подтверждение со стороны получателя",
    info : {
      title: "Книга",
      lines : [  
                {category: "Жанр", value: "Детектив" },
                { category: "Экранизация", value: "Да" },
                { category: "Состояние", value: "Хорошее" },
                { category: "Язык издания", value: "Англиский" },
                { category: "", value: "" },
                { category: "Пользователь", value: "Хитрый перец" },
                { category: "Город", value: "Хабаровск" },
                { category: "Рейтинг", value: "4.7" },
              ], 
      },
    book : {
      title: "Джоан Роулинг “Гарри Поттер и Дары Смерти”",
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
    status: "Подтвердите обмен",
    info : {
      title: "Книга",
      lines : [  
                {category: "Жанр", value: "Детектив" },
                { category: "Экранизация", value: "Да" },
                { category: "Состояние", value: "Хорошее" },
                { category: "Язык издания", value: "Англиский" },
                { category: "", value: "" },
                { category: "Пользователь", value: "Хитрый перец" },
                { category: "Город", value: "Хабаровск" },
                { category: "Рейтинг", value: "4.7" },
              ], 
      },
    book : {
      title: "Джоан Роулинг “Гарри Поттер и Дары Смерти”",
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
    id: 3, 
    status: "Подтверждён",
    info : {
      title: "Книга 2 ",
      lines : [  
                {category: "Жанр", value: "Детектив" },
                { category: "Экранизация", value: "Да" },
                { category: "Состояние", value: "Хорошее" },
                { category: "Язык издания", value: "Англиский" },
                { category: "", value: "" },
                { category: "Пользователь", value: "Хитрый перец" },
                { category: "Город", value: "Хабаровск" },
                { category: "Рейтинг", value: "4.7" },
              ], 
      },
    book : {
      title: "Джоан Роулинг “Гарри Поттер и Дары Смерти”",
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

]

export const activeExchange = createModel<RootModel>()({
  state: {
    error: null,
    list,
  },
  reducers: {
  },
});
