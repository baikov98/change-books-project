import { createModel } from "@rematch/core";
import { RootModel } from "."; 
import api from "../../services/api";


const listResponse = [
  {
    offer_my: {
      id: 1,
      book: {
        author: {
          name: "Александр",
          last_name: "Пушкин"
        },
        name: "Капитанская дочка"
      },
      isbn: "",
      year_publishing: 1836,
      category: [
        {
          parent: "Жанр",
          name: "Фэнтэзи"
        },
        {
          parent: "Состояние книги",
          name: "Потрепана"
        }
      ],
      status: "Свободен",
    },
    wish_my: {
      id: 2,
      address: {
        index: "125125",
        city: "Москва",
        street: "Патриарши",
        house: "31",
        structure: "2",
        apart: "33",
        is_default: true
      },
      category: [
        {
          parent: "Жанр",
          name: "Детектив"
        },
        {
          parent: "Состояние книги",
          name: "Новая"
        }
      ]
    },
    offer_their: {
      id: 0,
      book: {
        author: {
          name: "Иван",
          last_name: "Тургенев"
        },
        name: "Дворянское гнездо"
      },
      isbn: "",
      year_publishing: 1876,
      category: [
        {
          parent: "Жанр",
          name: "Детектив"
        },
        {
          parent: "Состояние книги",
          name: "Новая"
        }
      ]
    },
    wish_their: {
      id: 0,
      address: {
        index: "188858",
        city: "Орёл",
        street: "Полесская",
        house: "34",
        structure: "2",
        apart: "121",
        is_default: true
      },
      category: [
        {
          parent: "Жанр",
          name: "Детектив"
        },
        {
          parent: "Состояние книги",
          name: "Новая"
        }
      ]
    },
    is_both: true,
    track_number_my: null,
    track_number_their: "99 8212 21 12"
  }
]
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
              ], 
      user :  [
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
                  { category: "Обложка", value: "Оригинальная" },
                  { category: "ISBN", value: "978-5-353-02907-6" },
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
              ], 
      user :  [
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
                  { category: "Обложка", value: "Оригинальная" },
                  { category: "ISBN", value: "978-5-353-02907-6" },
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
              ], 
      user :  [
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
                { category: "Обложка", value: "Оригинальная" },
                { category: "ISBN", value: "978-5-353-02907-6" },
                { category: "Экранизация", value: "Да" },
                { category: "Жанр", value: "Детские книги, Фантастика" },
                { category: "Язык издания", value: "Русский" },
              ], 
      },
  },

]

export const activeExchange = createModel<RootModel>()({
  state: {
    error: null,
    list,
    listResponse,
  },
  reducers: {
    SET_LIST: (state,list: any) => {
      return {
        ...state,
        list,
      }
    }
  },
  effects: (dispatch) =>  ({
    async getActiveList(){
      try {
        const response = await api.get(`/api/v1/exchange/`);
        
    } catch (error) {
        console.error('Failed to GET ACTIVE EXCHANGE- ', error); 
    }
    }
  })
});
