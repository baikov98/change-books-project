import { createModel } from "@rematch/core";
import { RootModel } from "."; 

const list =  [
  { 
    id: 1, 
    status: "Завершён",
    info : {
      title: "Книга 1",
      lines : [  
                {category: "Жанр", value: "Детектив" },
                { category: "Экранизация", value: "Да" },
                { category: "Состояние", value: "Хорошее" },
                { category: "Язык издания", value: "Англиский" },
                { category: "", value: "" },
              ], 
      user : [
                { category: "Пользователь", value: "Хитрый перец" },
                { category: "Город", value: "Хабаровск" },
                { category: "Рейтинг", value: "4.7" },
            ],
      },
    book : {
      title: "Меняюсь",
      lines : [  
                { category: "Автор", value: "Джоан Роулинг" },
                { category: "Название книги", value: "Гарри Поттер и Дары Смерти" },
                { category: "Год издания", value: "2007" },
                { category: "ISBN", value: "978-5-353-02907-6" },
              ], 
      },
  },
  { 
    id: 2, 
    status: "Завершён",
    info : {
      title: "Книга 2",
      lines : [  
                {category: "Жанр", value: "Детектив" },
                { category: "Экранизация", value: "Да" },
                { category: "Состояние", value: "Хорошее" },
                { category: "Язык издания", value: "Англиский" },
                { category: "", value: "" },
              ], 
     user : [
                { category: "Пользователь", value: "Хитрый перец" },
                { category: "Город", value: "Хабаровск" },
                { category: "Рейтинг", value: "4.7" },
            ],
    },
    book : {
      title: "Меняюсь",
      lines : [  
                { category: "Автор", value: "Джоан Роулинг" },
                { category: "Название книги", value: "Гарри Поттер и Дары Смерти" },
                { category: "Год издания", value: "2007" },
                { category: "ISBN", value: "978-5-353-02907-6" },
              ], 
      },
  },
  { 
    id: 3, 
    status: "Завершён",
    info : {
      title: "Книга 3 ",
      lines : [  
                {category: "Жанр", value: "Детектив" },
                { category: "Экранизация", value: "Да" },
                { category: "Состояние", value: "Хорошее" },
                { category: "Язык издания", value: "Англиский" },
                { category: "", value: "" },
              ], 
      user : [
                { category: "Пользователь", value: "Хитрый перец" },
                { category: "Город", value: "Хабаровск" },
                { category: "Рейтинг", value: "4.7" },
            ],
      },
      book : {
        title: "Меняюсь",
        lines : [  
                  { category: "Автор", value: "Джоан Роулинг" },
                  { category: "Название книги", value: "Гарри Поттер и Дары Смерти" },
                  { category: "Год издания", value: "2007" },
                  { category: "ISBN", value: "978-5-353-02907-6" },
                ], 
        },
  },

]

export const archiveExchange = createModel<RootModel>()({
  state: {
    error: null,
    list,
  },
  reducers: {
  },
});
