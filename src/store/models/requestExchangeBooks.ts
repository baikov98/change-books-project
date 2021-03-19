import { createModel } from "@rematch/core";
import { RootModel } from ".";

const exchange1 = {
  authorName: "Михаил",
  authorSurname: "Булгаков",
  book: "Название книги",
  year: "1898",
  isbn: '2-266-11156-6',
  categoryList: [
    {category: 'Жанр', 
     value: [
      ['приключения', 'adventures'],
      ['фантастика', 'fantasy']
    ]},
    {category: 'Состояние', 
     value: [
      ['Новая', 'fresh'], 
    ]},
    {category: 'Дополнительно', 
     value: [
      ['Иностранный язык', 'foreignlanguage'], 
    ]},
  ]
}

interface ICategoryListItem {
  category: string;
  value: string[][];
}

interface IBookListItem {
    data: {
      [key: string]: {
        authorName: string,
        authorSurname: string,
        book: string,
        year?: string,
        isbn?: string,
        categoryList: ICategoryListItem[]
      }
    }
}

interface IPayload {
  authorName: string,
  authorSurname: string,
  book: string,
  year?: string,
  isbn?: string,
  categoryList: ICategoryListItem[]
}

export const requestExchangeBooks = createModel<RootModel>()({
    state: {
      data: {
          book1: exchange1,
          book2: exchange1,
          book3: exchange1,
      }
    } as IBookListItem,

    reducers: {
      SET_REQUEST_DATA: (state: IBookListItem, payload: object) => {
        return {
          ...state,
          data: {...state.data, ...payload }
        }
      },
      ADD_REQUEST_DATA: (state: IBookListItem, payload: IPayload) => {
        return {
          ...state,
          data: {...state.data, [`book${Object.keys(state.data).length+1}`]: payload }
          // эта страшная конструкция тут до появления бэка
        }
      },
  },
});